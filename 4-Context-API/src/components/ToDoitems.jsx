import { useContext } from "react";
import ToDoitem from "./ToDoitem";
import styles from "./ToDoitems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const ToDoitems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  //below is a destructure form of above one

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          
        ></ToDoitem>
      ))}
    </div>
  );
};

export default ToDoitems;
