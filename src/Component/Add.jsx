import React from "react";
import { useState } from "react";
import { TodoItem } from "../Store/Todo-Item-Store";
import { useContext } from "react";

const Add = () => {
  const items = useContext(TodoItem);
  const obj = items.handlers;

  const [value, setValue] = useState("");
  function handlers(e) {
    setValue(e.target.value);
  }

  function handleAddButton() {
    obj(value);
    setValue("");
  }
  return (
    <div>
      <div>
        <h1>Todo app</h1>
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          name="message"
          placeholder="Enter todos"
          value={value}
          onChange={handlers}
        />
        <button
          onClick={handleAddButton}
          style={{ background: "green", padding: "5px" }}
          type="submit"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
