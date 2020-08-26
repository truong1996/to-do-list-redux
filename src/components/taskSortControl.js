import React from "react";

const TaskSortControl = (props) => {
  const clickSort = (sortBy, sortValue) => {
    props.onSort(sortBy, sortValue);
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
              props.value.sortName === "name" && props.value.sortValue === 1
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
              props.value.sortName === "name" && props.value.sortValue === -1
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
              props.value.sortName === "status" && props.value.sortValue === 1
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
              props.value.sortName === "status" && props.value.sortValue === -1
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

export default TaskSortControl;
