import * as types from "../constants/ActionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const addTask = (tasks) => {
  return {
    type: types.ADD_TASK,
    tasks,
  };
};
export const delTask = (taskID) => {
  return {
    type: types.DEL_TASK,
    id: taskID,
  };
};
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};
export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task,
  };
};
export const filterTable = (filter) => {
  return {
    type: types.FILTER_TASK,
    filter,
  };
};
export const shortTask = (shortItem) => {
  return {
    type: types.SHORT_TASK,
    shortItem,
  };
};
