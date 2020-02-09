const express = require('express');
const router = express.Router();
const layout = require('../views/layout');
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
  res.send(layout('get home page'));
});

router.post('/', (req, res, next) => {
  res.send(layout('add post to DB'));
});

router.get('/add', (req, res, next) => {
  //   res.send(layout('add post'));
  res.send(addPage());
});

module.exports = router;
