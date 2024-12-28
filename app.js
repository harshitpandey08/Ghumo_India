const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

const MONGO_URL = "mongodb://localhost:27017/Ghumo_india";

main().then(() => {
  console.log("connected to database");
}).catch ((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs" );
app.set("views" , path.join(__dirname, "views"));

app.get("/" , (req,res) => {
  res.send("Hi i am root")
})

//Index Route
app.get("/listings", async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
});

//Show route


// app.get("/listing", async(req,res) => {
//   let sampleListing = new Listing({
//       title: "my new villa",
//       description: "house my nerw lorem jdjks",
//       price: 1234,
//       location: "Uttar Pradesh",
//       country: "India",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("Succesfull testing"); 
// });



app.listen(8080, () => {
  console.log("server is listening to port 8080");
} );