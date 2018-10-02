const express = require('express');
const Title = require('../models/title.model');

const router = express.Router();

router.get('/:TitleId', (req, res) => {
  Title.findOne({ TitleId: req.params.TitleId }, (err, fields) => {
    if (err) res.status(500).send(err);
    res.status(200).json(fields);
    return true;
  });
});

router.get('/', (req, res) => {
  Title.find({}, 'TitleName TitleNameSortable TitleId', (err, titles) => {
    if (err) res.status(500).send(err);
    res.status(200).json(titles);
    return true;
  });
});

module.exports = router;
