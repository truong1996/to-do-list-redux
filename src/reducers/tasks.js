import * as types from "./../constants/ActionTypes";

var randomString = (length) => {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
    ""
  );

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  var str = "";
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
};

const findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach(function (item, index) {
    if (item.id === id) {
      result = index;
    }
  });
  return result;
};

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      const newTasks = {
        id: action.tasks.id,
        name: action.tasks.name,
        status: action.tasks.status,
      };
      if (!newTasks.id) {
        newTasks.id = randomString(8);
        state.push(newTasks);
      } else {
        const index = findIndex(state, newTasks.id);
        if (index !== -1) {
          state[index] = newTasks;
        }
      }
      return [...state];
    case types.DEL_TASK:
      const id = action.id;
      const index = findIndex(state, id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
