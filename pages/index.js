import { Fragment, useState } from "react";
import TodoCard from "./todo-card";
import { RxFilePlus } from "react-icons/rx";
import TodoList from "./todo-list";
import classes from './index.module.css';

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
function HomePage(){
  const [todoList, setTodoList] = useState(DUMMY_ITEM);
  const [add, setAdd] = useState(false);

  const addButtonHndler = () =>{
    setAdd(!add);
  }
  return(
    <Fragment>
      <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', marginLeft:'220px', marginTop:'20px'}}>
        <ul className={classes.list}>
            {todoList.map((item) => (
              <TodoList
                key={item.id}
                id={item.id}
                name={item.name}
              />
            ))}
        </ul>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', marginLeft:'250px', marginTop:'20px'}}>
          <RxFilePlus color="red" style={{width: '30px', height: '30px'}} onClick={addButtonHndler} />
      </div>
      { add && (<div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop: '10px'}}>
        <TodoCard />
      </div>)}
    </Fragment>
  )
}
export default HomePage;