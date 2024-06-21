const express = require('express');
const router = express.Router();

const ItemController = require("../controllers/ItemControllers.js")

router.get('/all-items',ItemController.getAllItems);
router.get('/items/search',ItemController.getSearchedItems);

module.exports = router;