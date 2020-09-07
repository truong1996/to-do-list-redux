import * as types from "./../constants/ActionTypes";

const initialState = {
  filterName: "",
  filterStatus: "-1",
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_TASK:
      return {
        name: action.filter.name,
        status: action.filter.status,
      };
    default:
      return state;
  }
};

export default myReducer;
