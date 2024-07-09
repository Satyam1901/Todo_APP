/* eslint-disable react/prop-types */
function Todos({todos}) {
    return (
        <>
     {todos.map((todo) =>{
        return  <div key={todo._id} className="p-4 bg-white rounded-lg shadow-md flex flex-col">
        <h1 className="text-xl font-bold text-gray-800 mb-2">{todo.title}</h1>
        <h2 className="text-gray-600 mb-4">{todo.description}</h2>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          {todo.completed == true ? "Completed" : "Mark as Complete"}
        </button>
      </div>
     })}
        </>
    );
  }
  
  export default Todos;
  