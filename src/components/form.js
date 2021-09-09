

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }

  export default FormTodo;




























// import React, { Component } from 'react';
// import { ToDoList } from './ToDoList';
// import './form.css';

// export class Form extends Component {
//     handleSubmit(e) {
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <div className="center">
//                 <h2>ToDo</h2>
//                 <div>
//                     <form className="form-group" onSubmit={this.handleSubmit.bind(this)} noValidate>
//                         <input name="text" className="form-control" id="text" onChange={this.handleChange} type="text" placeholder="Your Todo Lists" />
//                         <button className="btn btn-primary">ToDo</button>
//                     </form>
//                 </div>
//                 <div className="todo_lists">
//                     <ToDoList />
//                 </div>
//             </div >
//         )
//     }
// }


