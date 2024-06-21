const mongoose = require("mongoose");

const CatgeorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    menuId :{
        type: Number
    }
},{
    timestamps: true
});

const Category = mongoose.model("Category", CatgeorySchema);
module.exports = Category;