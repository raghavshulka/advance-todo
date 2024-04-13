import React, { useState } from "react";
import { TodoItem } from "../Store/Todo-Item-Store";
import { useContext } from "react";

const Other = ({ Name, onDeleteClick }) => {
  const obj = useContext(TodoItem);
  const todos = obj.todo;
  return (
    <div>
      <div style={{ flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <p>{Name}</p>
          <button
            onClick={()=>onDeleteClick(todos)}
            style={{ background: "red", padding: "5px", margin: "10px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Other;
