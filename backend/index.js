const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=${process.env.MONGODB_DB}`
  );

  app.get("/", (req, res) => {
    res.send("Veggify Recipes app server");
  });
}

main()
  .then(() => console.log("Mongodb Connected Successfully!"))
  .catch((err) => console.log(err));

// routes
const ItemRoutes = require("./src/routes/ItemRoutes.js");
const CategoryRoutes = require("./src/routes/CategoryRoutes.js");

app.use('/api', ItemRoutes);
app.use('/api/', CategoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
