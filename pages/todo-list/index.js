import { useState } from 'react';
import classes from './todo-list.module.css';
import { RxTrash } from "react-icons/rx";
  

function TodoList (props){
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteHandler = async () => {
        setIsDeleting(true);
        try {
            const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input/${props.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // If deletion is successful, you can perform any necessary cleanup or UI updates
                console.log('Item deleted successfully');
                // Example: Refreshing the todo list after deletion
                window.location.reload();
            } else {
                console.error('Failed to delete item:', response.status);
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    const pushToDoneHandler= async()=>{
        try {
            const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: props.id, name: props.name })
            });
            if (response.ok) {
                console.log('Item moved to "todo-done" folder successfully');
                await deleteHandler();
            } else {
                console.error('Failed to move item to "todo-done" folder:', response.status);
            }
        } catch (error) {
            console.error('Error moving item to "todo-done" folder:', error);
        }
    }
    return(
        
            <div className={classes.card}>
                <div style={{padding: '0.5rem'}} >
                    <button className={classes.select} onClick={pushToDoneHandler}></button>
                </div>
                <div className={classes.name}>
                    <h3>{props.name}</h3>
                </div>
                <div className={classes.delete}>
                    <RxTrash color="red" style={{width: '30px', height: '30px'}} onClick={deleteHandler} />
                </div>
            </div>
        
    )
}

export default TodoList;