import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTodo() {
    // Check if title and description are not empty before sending data
    if (!title.trim() || !description.trim()) {
      alert("Please enter a title and description");
      return; // Exit the function if fields are empty
    }

    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        // eslint-disable-next-line no-unused-vars
        const json = await res.json();
        alert("Todo Added");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo");
      });
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h4 className="text-4xl font-extrabold dark:text-white">Create your TODO</h4>
      <input
        type="text"
        placeholder="Title"
        className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleAddTodo} // Call the new handleAddTodo function
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;