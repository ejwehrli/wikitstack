const express = require('express');
const router = express.Router();
const layout = require('../views/layout');
const {addPage} = require('../views');
const {Page} = require('../models');

router.get('/', (req, res, next) => {
  res.send(layout('get home page'));
});

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const page = new Page({
    title: title,
    content: content,
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  };
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});


module.exports = router;
