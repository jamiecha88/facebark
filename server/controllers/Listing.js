//below is only an example

const Listing = require('../models/Listing');

module.exports = {
  getAllListings: async (req, res) => {
    try {
      const listings = await Listing.find();
      res.json(listings);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getListingById: async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      res.json(listing);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createListing: async (req, res) => {
    try {
      const listing = new Listing(req.body);
      const savedListing = await listing.save();
      res.json(savedListing);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  updateListing: async (req, res) => {
    try {
      const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(listing);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deleteListing: async (req, res) => {
    try {
      await Listing.findByIdAndDelete(req.params.id);
      res.send('Listing deleted');
    } catch (err) {
      res.status(500).send(err);
    }
  },
};