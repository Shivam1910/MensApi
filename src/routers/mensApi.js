const express = require("express");
const MensRanking = require("../models/mens");
// const MenRanking = require("../models/mens");
const router = new express.Router();

router.post("/olymp", async (req, res) => {
    // console.log(req.body);

    try {
        const addingMenRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMenRecords.save();
        res.status(201).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get("/olymp", async (req, res) => {
    // console.log(req.body);

    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.get("/olymp/:id", async (req, res) => {
    // console.log(req.body);

    try {
        const _id = req.params.id;
        const getMen = await MensRanking.find({ _id });
        res.send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }
});
router.patch("/olymp/:id", async (req, res) => {
    // console.log(req.body);

    try {
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateMen);
    } catch (e) {
        res.status(500).send(e);
    }
});
router.delete("/olymp/:id", async (req, res) => {
    // console.log(req.body);

    try {
        const _id = req.params.id;
        const deleteMen = await MensRanking.findByIdAndDelete(_id);

        res.send(deleteMen);
    } catch (e) {
        res.status(500).send(e);
    }
});







module.exports = router;