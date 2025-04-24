const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables d'environnement depuis .env

// Fonction pour se connecter à MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connecté : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erreur de connexion à MongoDB : ${error.message}`);
        process.exit(1); // Quitte le processus en cas d'erreur
    }
};

module.exports = { connectDB };