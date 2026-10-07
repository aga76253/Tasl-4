const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

mongoose.connect(process.env.DB).then(() => {
    console.log("MongoDB connected");
  }).catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
     description: String,
      quantity: Number,
});

const Product = mongoose.model("Product", productSchema);

app.post("/api/product/create", async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.get("/api/product", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});



app.patch("/api/product/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true
  });      if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete("/api/product/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});