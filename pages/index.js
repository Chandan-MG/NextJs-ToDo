import { Fragment, useState } from "react";
import TodoCard from "./todo-card";
import { RxFilePlus } from "react-icons/rx";
import TodoList from "./todo-list";
import classes from './index.module.css';

function HomePage({ todoList }) {
  const [add, setAdd] = useState(false);

  const addButtonHandler = () => {
    setAdd(!add);
  };

  return (
    <Fragment>
      <div style={{ marginLeft: "220px", marginTop: "20px" }}>
        <h3>Today</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginLeft: "220px", marginTop: "20px" }}>
        <ul className={classes.list}>
          {todoList.map((item) => (
            <TodoList key={item._id} id={item._id} name={item.name} />
          ))}
        </ul>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginLeft: "250px", marginTop: "20px" }}>
        <RxFilePlus color="red" style={{ width: "30px", height: "30px" }} onClick={addButtonHandler} />
      </div>
      {add && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
          <TodoCard />
        </div>
      )}
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input`);
    if (response.ok) {
      const todoList = await response.json();
      return { 
        props: { 
          todoList 
        } 
      };
    } else {
      console.error("Failed to fetch data:", response.status);
      return { props: { todoList: [] } };
    }
  } catch (error) {
    console.error("Error fetching:", error);
    return { props: { todoList: [] } };
  }
}

export default HomePage;
