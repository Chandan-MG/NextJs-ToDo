import { useState, useRef, Fragment } from 'react';
import classes from './todo-card.module.css';

function TodoCard() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState('');

  const nameInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    const todoData = {
      name: enteredName,
    };
    
    // const response = await fetch('/api/todo-input',{
    //     method: 'POST',
    //     body: JSON.stringify(todoData),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    
    const response = await fetch(
      `https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input`,
      {
        method: "POST",
        body: JSON.stringify(todoData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // const data = await response.json();
    if (response.ok) {
        alert('added succesfully..')
    }
    nameInputRef.current.value = '';
    // props.onAddMeetup(meetupData);
  }



  return (
    <Fragment>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width:'100%' }}>
        
        <div className={classes.card}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              {/* <label htmlFor='name'>Title</label> */}
              <input type='text' required id='name' ref={nameInputRef} placeholder='Name' />
            </div>
            <div className={classes.actions}>
              <button type='submit'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default TodoCard;