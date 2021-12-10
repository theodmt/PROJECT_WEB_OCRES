const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { ClientModel } = require('../models/clientModel');

router.get('/', (req, res) => {
    ClientModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

//create new
router.post('/', (req, res) => {
    const newRecord = new ClientModel ({
        nom: req.body.nom,
        prenom: req.body.prenom,
        niveau: req.body.niveau,
        email: req.body.email,
        numero: req.body.numero,
        mdp: req.body.mdp
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error creating new data : " + err);
    })
});

//update
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow :" + req.params.id)

    const updateRecord = {
        nom : req.body.nom,
        prenom : req.body.prenom,
        niveau: req.body.niveau
    };

    ClientModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        { new: true},
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log ("Update error : " + err);
        }
    )
});

//delete
router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow :" + req.params.id)

    ClientModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log ("Delete error : " + err);
        }
    )
});

module.exports = router;
