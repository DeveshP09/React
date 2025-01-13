import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDoitem({todoName, todoDate, onDeleteClick}) {

  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="row dev-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger dev-button" onClick={() => deleteItem(todoName)}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default ToDoitem;