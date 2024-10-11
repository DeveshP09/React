import ToDoitem from "./ToDoitem";
import styles from './ToDoitems.module.css'

const ToDoitems = ({ todoItems, onDeleteClick}) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoitem
          key = {item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></ToDoitem>
      ))}
    </div>
  );
};

export default ToDoitems;
