import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Todos({ todos }) {
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  function handleUpdate(todoId) {
    setSelectedTodoId(todoId); // Store the clicked todo's ID
  }

  useEffect(() => {
    if (selectedTodoId) {
      // Only update if an ID is selected
      fetch("http://localhost:3000/statustodo", {
        method: "PUT",
        body: JSON.stringify({ _id: selectedTodoId }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json(); // Handle successful response (if any)
        })
        .catch((error) => {
          console.error("Error updating todo:", error);
          // Handle errors gracefully (e.g., display an error message to the user)
        })
        .finally(() => {
          setSelectedTodoId(null); // Reset selected ID after update or error
        });
    }
  }, [selectedTodoId]); // Re-run useEffect only when selectedTodoId changes

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="p-4 bg-white rounded-lg shadow-md flex flex-col"
        >
          <h1 className="text-xl font-bold text-gray-800 mb-2">{todo.title}</h1>
          <h2 className="text-gray-600 mb-4">{todo.description}</h2>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => {
              handleUpdate(todo._id);
              todo.completed = true; // Update locally for immediate UI change
            }}
          >
            {todo.completed === true ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
