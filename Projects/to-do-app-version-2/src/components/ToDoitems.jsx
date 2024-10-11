import ToDoitem from "./ToDoitem";
import styles from './ToDoitems.module.css'

const ToDoitems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoitem
          todoName={item.name}
          todoDate={item.dueDate}
        ></ToDoitem>
      ))}
    </div>
  );
};

export default ToDoitems;
