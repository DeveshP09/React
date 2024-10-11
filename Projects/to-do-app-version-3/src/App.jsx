import AddToDo from "./components/AddToDo";
import Appname from "./components/Appname";
import "./App.css";
import ToDoitems from "./components/ToDoitems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item is added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }]; // used spread operator
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    //filter method form new array from existing array 
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-containeer">
      <Appname />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoitems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoitems>
    </center>
  );
}

export default App;
