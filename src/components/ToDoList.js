import React, { Component } from 'react';


export class ToDoList extends Component {
    render() {
        return (
            <div className="container">
                <div className="lists">
                    Hello
                </div>
                <div className="ed">
                    <span className="edit">Edit</span> 
                    <span>Delete</span>
                </div>
            </div >
        )
    }
}




















// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import Todo from "./Todo";

// function TodoList({ onClick }) {
//   const [todos, setTodos] = useState([]);
  
//   const [editId, setEdit] = useState(false);
  
//   const [inputValue, setInputValue] = useState("");

//   const handleEditChange = (id, text) => {
//     setEdit(id);
//     setInputValue(text);
//   };
//   const addTodo = (todo) => {
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return;
//     }

//     const newTodos = [todo, ...todos];

//     setTodos(newTodos);
//     console.log(newTodos);
//   };

//   const removeTodo = (id) => {
//     const removedArr = [...todos].filter((todoId) => todoId.id !== id);

//     setTodos(removedArr);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const editTodo = (id, text) => {
//     let editTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.text = text;
//       }
//       return todo;
//     });
//     setTodos(editTodos);
//     setEdit(false);
//   };

//   return (
//     <>
//       <TodoForm onSubmit={addTodo} />
//       {/* I want to move this code below into a new component called Todo.js */}
//       <Todo
//         todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         editTodo={editTodo}
//         handleEditChange={handleEditChange}
//         editId={editId}
//         inputValue={inputValue}
//         setInputValue={setInputValue}
//       />
//     </>
//   );
// }

// export default TodoList;



























