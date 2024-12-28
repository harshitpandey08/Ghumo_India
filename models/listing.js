const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: {
      filename: String,
      url: String,
    },
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
