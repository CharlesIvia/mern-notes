const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://gatsby:gatsby2020@cluster0.holkp.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected"))
  .catch((err) => console.log(err));

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
