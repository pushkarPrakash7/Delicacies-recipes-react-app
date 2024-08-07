const Item = require("../model/item.models.js")

const getAllItems = async (req,res) =>{
    const result = await Item.find().sort({createdAt: -1});
    res.status(200).json(result);
}

const getSearchedItems = async (req, res) => {
  const { query } = req.query;
  try {
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    const items = await Item.find({ name: { $regex: query, $options: 'i' } });
    if (items.length === 0) {
      return res.status(404).json({ message: "No items found" });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error("Error searching items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleItem = async(req,res)=>{
  const {id} = req.params;
  try{
    const item = await Item.findById(id);
    if(item){
      res.status(200).json(item);
    }
    else{
      res.status(404).json({ message: "No Items found" });
    }
  }
  catch(error){
    res.status(500).json({ message: "No Items found" });
  }
}

const addNewItem = async (req, res) => {
  const {
    menuId,
    name,
    thumbnail_image,
    description,
    category,
    instructions,
    tags,
    ingredients,
    comments,
    more,
  } = req.body;

  try {
    const newItem = new Item({
      menuId,
      name,
      thumbnail_image,
      description,
      category,
      instructions,
      tags,
      ingredients,
      comments,
      more,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error adding new item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem,
    addNewItem,
}