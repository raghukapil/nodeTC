/* jshint esversion: 6 */

const express = require('express');
const validate = require('jsonschema').validate;
const userSchema = require('../schema/userSchema');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('user route is called');
});

router.post('/', (req, res) => {
    let jsonRequest = req.body;
    if(validate(jsonRequest, userSchema.userDetails.request).valid) {
        res.status(200);
        res.json(jsonRequest);
    } else {
        res.status(404);
        res.send('mandatory fields are required');
    }

});

module.exports = router;
