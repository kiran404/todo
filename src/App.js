import { useState, useEffect } from "react";
import Todo from "./Todo";

const generateRandomId = () => Math.random().toString(36).slice(2, 12);

export default function App() {
  // states
  const [mode, setMode] = useState("add");
  const [text, setText] = useState("");
  const [activeId, setActiveId] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
  },[]);

  const addTodo = (description) => {
    let newTodo = { id: generateRandomId(), description, completed: false };

    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify(newTodo),
      "Content-Type": "application/json"
    })
      .then((data) => {
        console.log(data);
        if (todos.length) {
          setTodos((prevState) => {
            return [...prevState, newTodo];
          });
        } else {
          setTodos([newTodo]);
        }
      })
      .catch((err) => console.log(err));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      const index = todos.findIndex((todo) => todo.id === activeId);
      if (index === -1) return;
      const cloned = [...todos];
      cloned[index].description = text;
      setTodos(cloned);
      setMode("add");
      setText("");
      setActiveId("");
      return;
    }
    if (text) {
      addTodo(text);
      setText("");
      setMode("add");
    }
  };

  const updateTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;
    const cloned = [...todos];
    cloned[index].completed = !cloned[index].completed;

    fetch(`http://localhost:3000/todos/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ completed: cloned[index].completed }),
        "Content-Type": "application/json"
      })
      .then((data) => {
        setTodos(cloned);
      })
      .catch(console.log);
  };

  const deleteTodos = (id) => {
    fetch(`http://localhost:3000/todo/${id}`,
      { method: "DELETE" })
      .then((data) => {
        const newTodos = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(newTodos);
      })
      .catch(console.log);
  };

  const editTodo = (id, description) => {
    setMode("edit");
    setText(description);
    setActiveId(id);
  };

  return (
    <div className="App">
      <form method="POST" onSubmit={formSubmitHandler}>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="description"
        />
        <button>Submit</button>
      </form>
      <div>
        <ul>
          {todos.length && todos.map((todo) => {
            return (
              <Todo
                onToggle={() => {
                  updateTodo(todo.id);
                }}
                onDelete={() => {
                  deleteTodos(todo.id);
                }}
                onEdit={() => {
                  editTodo(todo.id, todo.description);
                }}
                key={todo.id}
                todo={todo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}






// import { useState, useEffect } from "react";
// import Todo from "./Todo";

// const generateRandomId = () => Math.random().toString(36).slice(2, 12);

// export default function App() {
//   // states
//   const [mode, setMode] = useState("add");
//   const [text, setText] = useState("");
//   const [activeId, setActiveId] = useState("");

//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/todos")
//       .then((data) => {
//         setTodos(data);
//       })
//       .catch((err) => console.log(err));
//   });

//   const addTodo = (description) => {
//     let newTodo = { id: generateRandomId(), description, completed: false };
//     setTodos((prevState) => {
//       return [...prevState, newTodo];
//     });

//     fetch("http://localhost:3000/todos", {
//       method: "POST",
//       body: JSON.stringify(newTodo),
//       "Content-Type": "application/json"
//     })
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   };

//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     if (mode === "edit") {
//       const index = todos.findIndex((todo) => todo.id === activeId);
//       if (index === -1) return;
//       const cloned = [...todos];
//       cloned[index].description = text;
//       setTodos(cloned);
//       setMode("add");
//       setText("");
//       setActiveId("");
//       return;
//     }
//     if (text) {
//       addTodo(text);
//       setText("");
//       setMode("add");
//     }
//   };

//   const updateTodo = (id) => {
//     const index = todos.findIndex((todo) => todo.id === id);
//     if (index === -1) return;
//     const cloned = [...todos];
//     cloned[index].completed = !cloned[index].completed;
//     setTodos(cloned);
//     fetch(`http://localhost:3000/todo/${id}`,
//       {
//         method: "PUT",
//         body: JSON.stringify({ completed: cloned[index].completed }),
//         "Content-Type": "application/json"
//       })
//       .then()
//       .catch();
//   };

//   const deleteTodos = (id) => {
//     const newTodos = todos.filter((todo) => {
//       return todo.id !== id;
//     });
//     fetch(`http://localhost:3000/todo/${id}`,
//       { method: "DELETE" })
//       .then()
//       .catch();
//     setTodos(newTodos);
//   };

//   const editTodo = (id, description) => {
//     setMode("edit");
//     setText(description);
//     setActiveId(id);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={formSubmitHandler}>
//         <input
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//           }}
//           placeholder="description"
//         />
//         <button>Submit</button>
//       </form>
//       <div>
//         <ul>
//           {todos.length && todos.map((todo) => {
//             return (
//               <Todo
//                 onToggle={() => {
//                   updateTodo(todo.id);
//                 }}
//                 onDelete={() => {
//                   deleteTodos(todo.id);
//                 }}
//                 onEdit={() => {
//                   editTodo(todo.id, todo.description);
//                 }}
//                 key={todo.id}
//                 todo={todo}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }





















