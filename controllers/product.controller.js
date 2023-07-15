const Product = require('../models/product.model');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).semd({ message: 'An error occurred while retrieving products.' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
    });

    const savedProduct = await newProduct.save();
    res.status(201).send(savedProduct);
  } catch (error) {
    res.status(500).send({ message: 'An error occurred while creating the product.' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send({ message: 'Product not found.' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).send({ message: 'An error occurred while updating the product.' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({ message: 'Product not found.' });
    }

    res.status(200).send({ message: 'Product deleted successfully.' });
  } catch (error) {
    res.status(500).send({ message: 'An error occurred while deleting the product.' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
