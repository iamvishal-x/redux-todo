import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [], //initial state of today like useState([])
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      //state is the current state of Todo and action is the action we'll take on todo
      state.todoList.push(action.payload); //setTodo type of work, action.payload is the data
    },
    setCheck: (state, action) => {
      state.todoList.forEach((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
