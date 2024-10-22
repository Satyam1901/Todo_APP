const { createTodo, updateTodo } = require("./types"); //object destructing import code
const { todo } = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
//This CORS example required to hitting oriigin of specific URL like in this case it's localhost:5173, if we allow Universal just put app.use(cors())
app.use(
  cors({
  })
);
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
//Good Approach to Write the Code...
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
  res.json({ todos });
});

app.put("/statustodo", async function (req, res) {
  const completeTodo = req.body; // Correctly access the request body
  const parsedCompletePayload = updateTodo.safeParse(completeTodo); // Parse the request body

  if (!parsedCompletePayload.success) {
    return res.status(411).json({
      msg: "You sent wrong inputs",
    });
  }

  else if (parsedCompletePayload.success === true) {
    return res.status(208).json({
      msg: "Already Completed",
    });
  }
  try {
    await todo.updateOne(
      {
        _id: req.body._id,
      },
      {
        completed: true,
      }
    );

    res.json({
      msg: "Todo Marked Completed",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
});

app.listen(3000);
