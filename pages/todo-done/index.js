import { useState } from 'react';
import classes from './todo-done.module.css';
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
  

function TodoDone(props){
    
    const [listItem, setListItem] = useState(DUMMY_ITEM);
    const addDeleteHndler=()=>{

    }
    return(
        <div>
            {listItem.map(item => (
                <div className={classes.card} key={item.id}>
                    <div className={classes.name}>
                        <h3>{item.name}</h3>
                    </div>
                    <div className={classes.delete}>
                        <RxTrash color="red" style={{ width: '30px', height: '30px' }} onClick={addDeleteHndler} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoDone;