const express = require("express");
const router = express.Router();
const {postData} = require("../controllers/postData");



router.route('/postData').post(postData);


module.exports = router;