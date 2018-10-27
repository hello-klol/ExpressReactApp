const express = require('express');
const router = express.Router();

const Campaign = require('../models/campaign')

router.get('/', function(req, res, next) {
    Campaign.find({}, 'name goal total_budget status')
        .exec((err, list) => {
            if (err) { return next(err); }
            res.render('campaign_list', {list})
        });
});

module.exports = router;
