const express = require('express');
const { connectDB } = require('./config/db'); // Importez la fonction connectDB

// Initialisation de l'application Express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à la base de données
connectDB();

// Définition des routes
const produitRoutes = require('./routes/produitRoutes');
app.use('/api/produits', produitRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});