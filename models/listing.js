const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        require:true,
       },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1652376562886-cc9c5f630eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" ,
        set:(v) => v ===""
        ? "https://images.unsplash.com/photo-1652376562886-cc9c5f630eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" : v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
