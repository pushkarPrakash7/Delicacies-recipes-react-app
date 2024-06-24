const Item = require("../model/item.models");

const getCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const items = await Item.find({ category: category });
        if (items.length === 0) {
            return res.status(404).json({ message: "No items found for this category!" });
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the items." });
    }
}

module.exports = {
    getCategory,
}
