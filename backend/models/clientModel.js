const mongoose = require ("mongoose");

const ClientModel = mongoose.model(
    "node-api",
    {
        nom: {
            type: String,
            required : true
        },
        prenom: {
            type: String,
            required: true
        },
        niveau: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        mdp: {
            type: String,
            required: true
        }
    },
    "client"
);

module.exports = { ClientModel };