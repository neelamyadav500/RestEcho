const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const { search } = req.query;
  let allListings;
  if (search) {
    allListings = await Listing.find({
      $or: [
        { location: new RegExp(search, "i") },
        { title: new RegExp(search, "i") }
      ]
    });
  } else {
    allListings = await Listing.find({});
  }
  res.render("listings/index.ejs", { allListings, search });
};

module.exports.searchListings = async (req, res) => {
  const { location } = req.query;
  const allListings = await Listing.find({
    location: { $regex: location, $options: "i" }
  });
  res.render("listings/index.ejs", { allListings, search: location });
};

module.exports.getByCategory = async (req, res) => {
  const { category } = req.params;
  const allListings = await Listing.find({ category });
  res.render("listings/index.ejs", { allListings, search: category });
};


module.exports.getSuggestions = async (req, res) => {
  const { q } = req.query;
  const listings = await Listing.find({
    location: { $regex: q, $options: "i" }
  }).limit(5);
  const suggestions = [...new Set(listings.map(l => l.location))];
  res.json(suggestions);
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for doesn't exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", {
    listing,
    googleMapsApiKey: process.env.MAP_API_KEY
  });
};

module.exports.createListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Send Valid Data for Listing!");
  }
  let coordinate = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = coordinate.body.features[0].geometry;
  await newListing.save();

  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for doesn't exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250,e_blur:100");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Send Valid Data for Listing!");
  }

  const { id } = req.params;
  const listingData = req.body.listing;

  let listing = await Listing.findByIdAndUpdate(id, { ...listingData });

  // Handle image update if a new file is uploaded
  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
