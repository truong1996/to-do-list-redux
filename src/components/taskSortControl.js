import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

const TaskSortControl = (props) => {
  const clickSort = (sortBy, sortValue) => {
    const sortData = {
      sortBy,
      sortValue,
    };
    props.onSortItem(sortData);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenu1"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li onClick={() => clickSort("name", 1)}>
          <a
            role="button"
            className={
              props.sortTask.sortBy === "name" && props.sortTask.sortValue === 1
                ? "sort_selected"
                : ""
            }
          >
            <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
          </a>
        </li>
        <li onClick={() => clickSort("name", -1)}>
          <a
            role="button"
            className={
              props.sortTask.sortBy === "name" &&
              props.sortTask.sortValue === -1
                ? "sort_selected"
                : ""
            }
          >
            <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
          </a>
        </li>
        <li role="separator" className="divider"></li>
        <li onClick={() => clickSort("status", 1)}>
          <a
            role="button"
            className={
              props.sortTask.sortBy === "status" &&
              props.sortTask.sortValue === 1
                ? "sort_selected"
                : ""
            }
          >
            Trạng Thái Kích Hoạt
          </a>
        </li>
        <li onClick={() => clickSort("status", -1)}>
          <a
            role="button"
            className={
              props.sortTask.sortBy === "status" &&
              props.sortTask.sortValue === -1
                ? "sort_selected"
                : ""
            }
          >
            Trạng Thái Chưa Kích Hoạt
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    sortTask: state.sortTask,
  };
};

const mapDispatch = (dispatch, props) => {
  return {
    onSortItem: (sortItem) => {
      dispatch(actions.shortTask(sortItem));
    },
  };
};

export default connect(mapState, mapDispatch)(TaskSortControl);
