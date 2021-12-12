import "./App.css";
import Input from "./Components/Input";
import TodoItem from "./Components/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          <h1>Redux ToDo App</h1>
          {todoList.map((item) => (
            <TodoItem id={item.id} name={item.item} done={item.done} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
