const Category = require('../model/category.models');
const Item = require("../model/item.models");

const getCategory = async (req,res) =>{
    const {category} = req.params;
    try{
        const categoryData = await Category.findOne({name: category});
        if(!categoryData){
            return res.status(404).json({message: "Category Not found!"})
        }
        const items = Item.find({menuId : categoryData.menuId})
        res.status(200).json(items);
    }
    catch(error){
        res.status(500).json({message: "No Catgeory Specified"});
    }
}

module.exports={
    getCategory,
}