import AddToDo from "./components/AddToDo";
import Appname from "./components/Appname";
import "./App.css";
import ToDoitems from "./components/ToDoitems";

function App() {
  const todoItems = [
    { name: "buy milk", dueDate: "4/10/2023" },
    { name: "Go to college", dueDate: "4/10/2023" },
    { name: "Complete project", dueDate: "10/10/2023" },

  ];
  return (
    <center className="todo-containeer">
      <Appname />
      <AddToDo />
      <ToDoitems todoItems={todoItems}></ToDoitems>
    </center>
  );
}

export default App;
