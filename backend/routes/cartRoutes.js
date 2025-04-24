const express = require("express");
const router = express.Router();
const { getCart, addToCart } = require("../controllers/cartController");

router.get("/:userId", getCart);
router.post("/", addToCart);

module.exports = router;