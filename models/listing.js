const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { string, required } = require("joi");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
          type: String,
          default: 'defaultimage'
        },
        url: {
          type: String,
          default: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60'
        }
      },
    price: Number, 
    location: String,
    country: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    owner:{
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    geometry:{
      type:{
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates:{
        type: [Number],
        required: true,
      },
    },
    category: {
        type: String,
        enum: [
          "Trending","Cabins","Countryside","Farms","Arctic","Ski-in-out",
          "Amazing pools","Mountains","Camping","Beach","Tropical",
          "National parks","Amazing views","Rooms","Treehouses","Mansions",
          "Domes","Castles","Islands","Top cities","Historical homes"
        ]
      }
});

listingSchema.pre('save', function (next) {
    if (!this.image.url || this.image.url.trim() === '') {
      this.image.url = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60';
      this.image.filename = 'defaultimage';
    }
    next();
  });

  // Mongoose Middleware
listingSchema.post("findOneAndDelete", async(listing)=>{
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
