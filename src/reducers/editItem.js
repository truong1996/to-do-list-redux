import * as types from "./../constants/ActionTypes";

const initialState = {
  id: "",
  name: "",
  status: "0",
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      const task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status,
      };
      console.log(action);
      return task;
    default:
      return state;
  }
};

export default myReducer;
