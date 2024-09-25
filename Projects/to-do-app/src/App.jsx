import AddToDo from "./components/AddToDo";
import Appname from "./components/Appname";
import ToDoitem1 from "./components/ToDoitem1";
import ToDoitem2 from "./components/ToDoitem2";
import "./App.css";

function App() {
  return (
    <center class="todo-containeer">
      <Appname />
      <AddToDo />
      <div class="item-container">
      <ToDoitem1 />
      <ToDoitem2 />
      </div>
      
    </center>
  );
}

export default App;
