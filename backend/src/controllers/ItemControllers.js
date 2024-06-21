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

module.exports = {
    getAllItems,
    getSearchedItems
}