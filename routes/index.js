"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.html');
});

router.get('/scoreboard', (req, res, next) => {
    res.render('scoreboard.html');
});

router.get('/scoreboard/:cityName', (req, res, next) => {
    const name = req.params.cityName.replace(/-/g, " ");
    res.render('scoreboard-city.html', {"cityName": name.charAt(0).toUpperCase() + name.slice(1)});
});

module.exports = router;