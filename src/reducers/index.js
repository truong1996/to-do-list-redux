import { combineReducers } from "redux";
import tasks from "./tasks";
import toggleForm from "./toggleForm";
import editTask from "./editItem";
import filterTask from "./filterItem";
import sortTask from "./shortItem";

const myReducer = combineReducers({
  tasks,
  toggleForm,
  editTask,
  filterTask,
  sortTask,
});

export default myReducer;
