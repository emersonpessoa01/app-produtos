const Product = require("../models/product.model");

module.exports = {
  async index(req, res) {
    const product = await Product.find();
    res.json(product);
  },
  async create(req, res) {
    const {title, price, amount, imageUrl, url, comments } = req.body;
    let data = {};
    let product = await Product.findOne({ title });

    if (!product) {
      data = { title, price, amount, imageUrl, url, comments };

      product = await Product.create(data);
      return res.status(200).json(product);
    } else {
      return res.status(500).json(product);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const product = await Product.findOne({ _id });
    res.json(product);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const product = await Product.findByIdAndDelete({ _id });
    return res.json(product);
  },
  async update(req, res) {
    const { _id, title, price, amount, imageUrl, url, comments } = req.body;
    const data = { title, price, amount, imageUrl, url, comments };
    const product = await Product.findOneAndUpdate({ _id }, data, {
      new: true,
    });
    res.json(product);
  },
};
