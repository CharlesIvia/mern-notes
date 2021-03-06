const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const PORT = 4000;
const app = express();

//Connect to Db
const dbURL =
  "mongodb+srv://gatsby:gatsby2020@cluster0.holkp.mongodb.net/todo?retryWrites=true&w=majority";

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

//Create new todo

app.post("/create", (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/", (req, res) => {
  Todo.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.text = req.body.text;
      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

//Get Specific

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});
//Listen
app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
