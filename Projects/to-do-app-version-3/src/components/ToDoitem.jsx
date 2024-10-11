function ToDoitem({todoName, todoDate, onDeleteClick}) {
  return (
    <div className="row dev-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger dev-button" onClick={() => onDeleteClick(todoName)}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default ToDoitem;