const express = require('express');
const Title = require('../models/title.model');

const router = express.Router();

router.get('/:id', (req, res) => {
  Title.findOne({ _id: req.params.id }, (err, fields) => {
    if (err) res.status(500).send(err);
    res.status(200).json(fields);
    return true;
  });
});

router.get('/', (req, res) => {
  Title.find({}, 'TitleName TitleNameSortable', (err, titles) => {
    if (err) res.status(500).send(err);
    res.status(200).json(titles);
    return true;
  });
});

module.exports = router;
