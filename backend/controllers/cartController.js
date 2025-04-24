const Cart = require("../models/Cart");

// Récupérer le contenu du panier
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate("items.productId");
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ajouter un article au panier
exports.addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find((item) => item.productId == productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ productId });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};