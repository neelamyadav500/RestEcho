const sampleListings = [
  {
    title: "Modern Apartment",
    description: "A spacious and modern 2-bedroom apartment located in the heart of New York.",
    price: 3500,
    location: "Mumbai, Maharashtra",
    country: "India",
    category: "Top cities",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "modern_apartment.jpg",
      url: "https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },
  {
    title: "Cozy Cottage",
    description: "A charming cottage with a beautiful garden and a peaceful atmosphere.",
    price: 3000,
    location: "Ahmedabad, Gujarat",
    country: "India",
    category: "Countryside",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "cozy_cottage.jpg",
      url: "https://images.pexels.com/photos/1131573/pexels-photo-1131573.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    geometry: {
      type: "Point",
      coordinates: [72.587265, 23.025793]
    }
  },
  {
    title: "Seaside Villa",
    description: "A luxurious villa with stunning views of the ocean and direct beach access.",
    price: 4500,
    location: "Pune, Maharashta",
    country: "India",
    category: "Amazing views",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "seaside_villa.jpg",
      url: "https://images.pexels.com/photos/31751025/pexels-photo-31751025/free-photo-of-elegant-mediterranean-villa-by-the-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    geometry: {
      type: "Point",
      coordinates: [73.8567, 18.5204]
    }
  },
  {
    title: "City Center Loft",
    description: "An elegant loft with modern amenities and easy access to all major city attractions.",
    price: 4000,
    location: "Mumbai, Maharashtra",
    country: "India",
    category: "Trending",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "city_center_loft.jpg",
      url: "https://images.pexels.com/photos/31832594/pexels-photo-31832594/free-photo-of-sunlit-modern-loft-interior-with-brick-walls.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    }
  },
  {
    title: "Mountain Retreat",
    description: "A peaceful retreat in the mountains, perfect for nature lovers and adventure enthusiasts.",
    price: 3500,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "Mountains",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "mountain_retreat.jpg",
      url: "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [77.1797, 32.2396]
    }
  },
  {
    title: "Riverside Cabin",
    description: "A quaint cabin located by the river, ideal for a weekend getaway.",
    price: 2500,
    location: "Hyderabad, Telangana",
    country: "India",
    category: "Camping",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "riverside_cabin.jpg",
      url: "https://images.pexels.com/photos/27810023/pexels-photo-27810023/free-photo-of-a-small-house-on-a-lake-with-a-roof.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [78.456355, 17.384052]
    }
  },
  {
    title: "Beachfront Bungalow",
    description: "A serene bungalow right on the beach, perfect for relaxing and unwinding.",
    price: 4800,
    location: "Chennai, Tamil Nadu",
    country: "India",
    category: "Amazing pools",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "beachfront_bungalow.jpg",
      url: "https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    geometry: {
      type: "Point",
      coordinates: [80.248357, 13.084622]
    }
  },
  {
    title: "Countryside Farmhouse",
    description: "A traditional farmhouse surrounded by lush green fields and fresh air.",
    price: 4200,
    location: "Mumbai, Maharashtra",
    country: "India",
    category: "Farms",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "countryside_farmhouse.jpg",
      url: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    geometry: {
      type: "Point",
      coordinates: [72.836447, 18.987807]
    }
  },
  {
    title: "Luxury Penthouse",
    description: "An upscale penthouse offering panoramic city views and luxury amenities.",
    price: 5000,
    location: "New Delhi, India",
    country: "India",
    category: "Top cities",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "luxury_penthouse.jpg",
      url: "https://images.pexels.com/photos/10660335/pexels-photo-10660335.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    geometry: {
      type: "Point",
      coordinates: [77.1025, 28.7041]
    }
  },
  {
    title: "Forest Lodge",
    description: "A beautiful lodge surrounded by forests, offering the perfect escape from city life.",
    price: 3100,
    location: "Shillong, Meghalaya",
    country: "India",
    category: "Camping",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "forest_lodge.jpg",
      url: "https://images.pexels.com/photos/31775523/pexels-photo-31775523/free-photo-of-rustic-forest-cabin-with-accessible-design.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [91.883, 25.578]
    }
  },
  {
    title: "Beachside House",
    description: "A stunning beachfront house with a private deck and ocean view.",
    price: 4700,
    location: "Baga, Goa",
    country: "India",
    category: "Beach",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "beachside_house.jpg",
      url: "https://images.pexels.com/photos/27064838/pexels-photo-27064838/free-photo-of-a-building-on-the-shore-in-capri-italy.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [73.7562, 15.5558]
    }
  },
  {
    title: "Vineyard Estate",
    description: "A luxurious estate located in the middle of a sprawling vineyard.",
    price: 4600,
    location: "Bengaluru, Karnataka",
    country: "India",
    category: "Countryside",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "vineyard_estate.jpg",
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [77.587106, 12.977063]
    }
  },
  {
    title: "Riverside Villa",
    description: "A luxurious villa with stunning views of the river and surrounding nature.",
    price: 4300,
    location: "Kolkata, West Bengal",
    country: "India",
    category: "Amazing views",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "riverside_villa.jpg",
      url: "https://images.pexels.com/photos/14386174/pexels-photo-14386174.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [88.363044, 22.562627]
    }
  },
  {
    title: "Ski Resort Chalet",
    description: "A cozy chalet perfect for a ski getaway, with easy access to the slopes.",
    price: 2900,
    location: "Auli, Uttarakhand",
    country: "India",
    category: "Ski-in-out",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "ski_resort_chalet.jpg",
      url: "https://images.pexels.com/photos/311066/pexels-photo-311066.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [79.57026, 30.52892]
    }
  },
  {
    title: "City Garden Home",
    description: "A beautiful home with a lush garden, offering a peaceful retreat from the city.",
    price: 3200,
    location: "Bengaluru, Karnatka",
    country: "India",
    category: "Top cities",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "city_garden_home.jpg",
      url: "https://images.pexels.com/photos/31721986/pexels-photo-31721986/free-photo-of-bright-sunlit-balcony-with-plants-and-decor.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    }
  },
  {
    title: "Luxury Resort",
    description: "A 5-star resort with incredible amenities and breathtaking views.",
    price: 5000,
    location: "Panaji, Goa",
    country: "India",
    category: "Trending",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "luxury_resort.jpg",
      url: "https://images.pexels.com/photos/31817157/pexels-photo-31817157/free-photo-of-luxurious-modern-villa-with-infinity-pool-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [73.827827, 15.496777]
    }
  },
  {
    title: "Urban Loft",
    description: "A stylish urban loft with modern decor and an open-concept layout.",
    price: 3800,
    location: "Agra, Uttar Pradesh",
    country: "India",
    category: "Top cities",
    reviews: [],
    owner: "680c8d10c8e12f5f3b94fde3",
    image: {
      filename: "urban_loft.jpg",
      url: "https://images.pexels.com/photos/31832594/pexels-photo-31832594/free-photo-of-sunlit-modern-loft-interior-with-brick-walls.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    geometry: {
      type: "Point",
      coordinates: [78.009816, 27.175255]
    }
  },
  {
      title: "Hillside Villa",
      description: "A beautiful hillside villa with panoramic views of the surrounding mountains and valleys.",
      price: 4200,
      location: "Kullu, Himachal Pradesh",
      country: "India",
      category: "Mountains",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "hillside_villa.jpg",
        url: "https://images.pexels.com/photos/15435496/pexels-photo-15435496/free-photo-of-residential-house-in-winter.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [77.1089, 31.9592]
      }
    },
    {
      title: "Lake View Lodge",
      description: "A charming lodge overlooking a serene lake, perfect for a peaceful retreat.",
      price: 2900,
      location: "Udaipur, Rajasthan",
      country: "India",
      category: "Historical homes",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "lake_view_lodge.jpg",
        url: "https://images.pexels.com/photos/15534234/pexels-photo-15534234/free-photo-of-chair-on-balcony-with-sea-view.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [73.6842, 24.5854]
      }
    },
    {
      title: "Penthouse Suite",
      description: "A luxurious penthouse with stunning views and modern amenities in the heart of the city.",
      price: 4900,
      location: "Noida, Uttar Pradesh",
      country: "India",
      category: "Top cities",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "penthouse_suite.jpg",
        url: "https://images.pexels.com/photos/6970051/pexels-photo-6970051.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [77.3910, 28.5355]
      }
    },
    {
      title: "Desert Oasis",
      description: "A tranquil oasis surrounded by the desert, offering both serenity and luxury.",
      price: 4700,
      location: "Jaipur, Rajasthan",
      country: "India",
      category: "Historical homes",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "desert_oasis.jpg",
        url: "https://images.pexels.com/photos/8484839/pexels-photo-8484839.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [75.7873, 26.9124]
      }
    },
    {
      title: "Mountain Cabin",
      description: "A cozy cabin nestled in the mountains, perfect for a getaway with family or friends.",
      price: 3300,
      location: "Shimla, Himachal Pradesh",
      country: "India",
      category: "Mountains",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "mountain_cabin.jpg",
        url: "https://images.pexels.com/photos/7746560/pexels-photo-7746560.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [77.1087, 31.1048]
      }
    },
    {
      title: "Secluded Retreat",
      description: "A quiet retreat in a secluded location, surrounded by nature and peace.",
      price: 2600,
      location: "Pahalgam, Jammu and Kashmir",
      country: "India",
      category: "Mountains",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "secluded_retreat.jpg",
        url: "https://images.pexels.com/photos/16151009/pexels-photo-16151009/free-photo-of-house-in-valley-among-hills.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [75.3150, 34.0161]
      }
    },
    {
      title: "Urban Loft",
      description: "A chic urban loft offering modern living spaces and easy access to city attractions.",
      price: 3700,
      location: "Chennai, Tamil Nadu",
      country: "India",
      category: "Mansions",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "urban_loft.jpg",
        url: "https://images.pexels.com/photos/20337840/pexels-photo-20337840/free-photo-of-view-of-a-loft-style-living-room-with-a-brown-leather-sofa.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [80.2785, 13.0827]
      }
    },
    {
      title: "Country Estate",
      description: "A large country estate with beautiful gardens and a peaceful atmosphere.",
      price: 4500,
      location: "Mysuru, Karnatka",
      country: "India",
      category: "Farms",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "country_estate.jpg",
        url: "https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [76.6394, 12.2958]
      }
    },
    {
      title: "Oceanfront Property",
      description: "A luxurious oceanfront property with panoramic views and direct beach access.",
      price: 4800,
      location: "Guirim, Goa",
      country: "India",
      category: "Beach",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "oceanfront_property.jpg",
        url: "https://images.pexels.com/photos/14746022/pexels-photo-14746022.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8066, 15.5732]
      }
    },
    {
      title: "Luxury Resort Villa",
      description: "A high-end resort villa with world-class amenities and a stunning natural setting.",
      price: 5000,
      location: "Kochi, Kerala",
      country: "India",
      category: "Trending",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "luxury_resort_villa.jpg",
        url: "https://images.pexels.com/photos/12414221/pexels-photo-12414221.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [76.2673, 9.9312]
      }
    },
    {
      title: "Countryside Villa",
      description: "A peaceful countryside villa offering a perfect retreat from the hustle and bustle of city life.",
      price: 3100,
      location: "Pondicherry, India",
      country: "India",
      category: "Farms",
      reviews: [],
      owner: "680c8d10c8e12f5f3b94fde3",
      image: {
        filename: "countryside_villa.jpg",
        url: "https://images.pexels.com/photos/31817156/pexels-photo-31817156/free-photo-of-modern-luxury-villa-with-infinity-pool.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      geometry: {
        type: "Point",
        coordinates: [79.8083, 11.9416]
      }
    }
  ]
  
module.exports = { data: sampleListings };
