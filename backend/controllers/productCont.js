import Product from "../models/Product.js";

export const addproduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

export const makeChange = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (error) {
    next(err);
  }
};

export const removeProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted!");
  } catch (error) {
    next(err);
  }
};

export const singleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const search = async (req, res, next) => {
  try {
    const query = req.query.q;
    const searchQuery = {};
    if (query) {
      const regex = new RegExp(query, "i"); // Case-insensitive search
      // searchQuery.$text = { $search: query }; // Search across multiple fields (optional)
      // OR (alternative for searching specific fields):
      searchQuery.$or = [
        { title: { $regex: regex } },
        { desc: { $regex: regex } },
        { categories: { $regex: regex } },
      ];
    }
    const products = await Product.find(searchQuery);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductStats = async (req, res, next) => {
  try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear - 1));

    const data = await Product.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    const whole = data.reduce((n, { total }) => n + total, 0);
    res.status(200).json({ data, whole });
  } catch (error) {
    next(error);
  }
};

export const filterByPrice = async (req, res, next) => {
  try {
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);

    const products = await Product.find({
      price: { $gte: minPrice, $lte: maxPrice },
    });

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
