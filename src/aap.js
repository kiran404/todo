import { useState } from 'react';

const generateRandomId = () => Math.random().toString(36).slice(2, 12);

export default function App() {
    const [mode, setMode] = useState("add");
    const [text, setText] = useState("");
    const [activeId,setActiveId]=useState("");

    const [todos,setTodos]=useState([]);
    
    const addTodo=(description)=>{
        setTodos((prevState)=>{
            return[
                ...prevState,
                {id:generateRandomId(),description,completed: false}
            ]
        });
    }
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(text){
            addTodo(text);
        }
    }
    const updatedTodo=(id)=>{
        const index=todos.findIndex((todo)=>todo.id===id);
        if(index ===-1) return;
    }
}