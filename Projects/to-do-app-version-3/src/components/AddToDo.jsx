import { useState } from "react";

function AddToDo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);

  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    // we define two class row which is imported from bootstrap and other dev-row for CSS
    <div class="row dev-row"> 
      <div class="col-6">
        <input type="text" value={todoName} placeholder="Enter Todo here" onChange={handleNameChange}></input>
      </div>
      <div class="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success dev-button" onClick={handleAddButtonClicked}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;