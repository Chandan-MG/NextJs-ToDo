import { useState } from 'react';
import classes from './todo-list.module.css';
import { RxTrash } from "react-icons/rx";

const DUMMY_ITEM = [
    {
        id: 'm1',
        name: 'A first meetup',
    },
    {
        id: 'm2',
        name: 'A second meetup',
    },
    {
        id: 'm3',
        name: 'A third meetup',
    }
]
  

function TodoList (props){
    const addDeleteHndler=()=>{

    }
    return(
        
            <div className={classes.card}>
                <div style={{padding: '0.5rem'}} >
                    <button className={classes.select}></button>
                </div>
                <div className={classes.name}>
                    <h3>{props.name}</h3>
                </div>
                <div className={classes.delete}>
                    <RxTrash color="red" style={{width: '30px', height: '30px'}} onClick={addDeleteHndler} />
                </div>
            </div>
        
    )
}

export default TodoList;