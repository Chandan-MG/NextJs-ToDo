import { useState, useRef, Fragment } from 'react';
import classes from './todo-card.module.css';

function TodoCard() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState('');

  const nameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;

    const todoData = {
      name: enteredName,
    };
    alert(todoData.name);
    setTodoList(todoData);
    // props.onAddMeetup(meetupData);
  }

  const addTodo = async () => {
  };

  const deleteTodo = async (id) => {
  };



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