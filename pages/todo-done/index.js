import { useState } from 'react';
import classes from './todo-done.module.css';
import { RxTrash } from "react-icons/rx";



function TodoDone({ doneList }){
    
    // const [listItem, setListItem] = useState(DUMMY_ITEM);

    const [isDeleting, setIsDeleting] = useState(false);

    const deleteHandler = async (id) => {
        setIsDeleting(true);
        try {
            const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done/${id}`, {
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
    return(
        <div>
            {doneList.map(item => (
                <div className={classes.card} key={item._id}>
                    <div className={classes.name}>
                        <h3>{item.name}</h3>
                    </div>
                    <div className={classes.delete}>
                        <RxTrash color="red" style={{ width: '30px', height: '30px' }} onClick={() => deleteHandler(item._id)} />
                    </div>
                </div>
            ))}
        </div>
    )
}


export async function getStaticProps() {
    try {
      const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done`);
      if (response.ok) {
        const doneList = await response.json();
        return { 
          props: { 
            doneList 
          } 
        };
      } else {
        console.error("Failed to fetch data:", response.status);
        return { props: { doneList: [] } };
      }
    } catch (error) {
      console.error("Error fetching:", error);
      return { props: { doneList: [] } };
    }
}

export default TodoDone;