import * as types from "./../constants/ActionTypes";

const initialState = {
  filterName: "",
  filterStatus: "-1",
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHORT_TASK:
      console.log(action);
      return {
        sortBy: action.shortItem.sortBy,
        sortValue: action.shortItem.sortValue,
      };
    default:
      return state;
  }
};

export default myReducer;
