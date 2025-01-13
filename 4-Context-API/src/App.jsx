import AddToDo from "./components/AddToDo";
import Appname from "./components/Appname";
import "./App.css";
import ToDoitems from "./components/ToDoitems";
import { useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItems, dispatchTodoitems] = useReducer();

  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New item is added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ]; // used spread operator
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    //filter method form new array from existing array
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,                               //if key valu pair has a same name then we can write it using same eg. todoItems: todoItems 
        addNewItem,                              // can be written as a "todoItems"     
        deleteItem,
      }}
    >
      <center className="todo-containeer">
        <Appname />
        <AddToDo />
        <WelcomeMessage></WelcomeMessage>
        <ToDoitems></ToDoitems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
