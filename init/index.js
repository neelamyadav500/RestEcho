const mongoose = require("mongoose");
const data = require("./data.js"); 
const Listing = require("../models/listing.js");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/restEcho", {
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

const initDB = async () => {
        await Listing.deleteMany({});  
        await Listing.insertMany(data.data);        
};

main().then(initDB);
