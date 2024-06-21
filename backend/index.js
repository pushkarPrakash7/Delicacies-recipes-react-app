
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const cors = require("cors");
//ispushkarjack0709
//lRgvQoG3n2J20szy

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    "mongodb+srv://ispushkarjack0709:lRgvQoG3n2J20szy@delicacies-react-app.bcft0zu.mongodb.net/Delicacies-react-app?retryWrites=true&w=majority&appName=Delicacies-react-app"
  );

  app.get("/", (req, res) => {
    res.send("Veggify Recipes app server");
  });
}

main()
  .then(() => console.log("Mongodb Connected Successfully!"))
  .catch((err) => console.log(err));

//routes
const ItemRoutes = require("./src/routes/ItemRoutes.js");
const CategoryRoutes = require("./src/routes/CategoryRoutes.js");



app.use('/api',ItemRoutes);
app.use('/api/',CategoryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
