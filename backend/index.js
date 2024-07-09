
const { createTodo, updateTodo } = require("./types"); //object destructing import code
const { todo } = require("./db");
const express = require('express')

const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsedPayload = createTodo.safeParse(createpayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }

  //Put in mongo DB
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.json({
    msg: "ToDO Created",
  });
});



// app.get("/todos", async function (req, res) {
//     try {
//       const todos = await todo.find({}); // Fetch todos from the database
//       res.json({ todos });
//     } catch (err) {
//       res.status(500).json({
//         msg: "Error retrieving todos",
//         error: err.message,
//       });
//     }
//   });

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
     res.json({todos})
   });



app.put("/todo", async function (req, res) {
  const completeTodo = res.body;
  const parsedCompletePayload = updateTodo.safeParse(updateTodo);

  if (!parsedCompletePayload.success0) {
    res.status(411).json({
      msg: "You Sent wrong inputs",
    });
  }
  await todo.update(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );
res.json({
    msg: "Todo Marked Completed"
})
});

app.listen(3000)
