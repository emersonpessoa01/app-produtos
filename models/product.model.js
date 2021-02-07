const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    amount: { type: Number, default: 0 },
    imageUrl: String,
    url: String,
    comments: [
      {
        comment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const products = mongoose.model("Products", DataSchema);
module.exports = products;
