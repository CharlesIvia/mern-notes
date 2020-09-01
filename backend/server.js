const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const PORT = 4000;
const app = express();

//Connect to Db
const dbURL =
  "mongodb+srv://gatsby:gatsby2020@cluster0.holkp.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected"))
  .catch((err) => console.log(err));

//Middleware

app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});
//Listen
app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
