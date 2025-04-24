const Produits = require("../models/produits");

// Récupérer tous les produits
exports.getProduits = async (req, res) => {
  try {
    const produits = await Produits.find();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ajouter un produit (pour l'admin)
exports.addProduct = async (req, res) => {
  const { name, price, category, image } = req.body;
  const produits = new Produits({ name, price, category, image });

  try {
    const newProduits = await produits.save();
    res.status(201).json(newProduits);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};