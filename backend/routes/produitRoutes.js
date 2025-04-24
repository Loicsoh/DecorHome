const express = require("express");
const router = express.Router();
const produitController = require('../controllers/produitController');
const { getProduits } = require('../controllers/produitController');

router.get("/", getProduits);
router.post('/produits', produitController.addProduct);

module.exports = router;