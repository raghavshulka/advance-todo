import Other from "./Other";
import React, { useState } from "react";
import { TodoItem } from "../Store/Todo-Item-Store";
import { useContext } from "react";

 const Todoitems = () => {
  const obj = useContext(TodoItem);
  const remove = obj.handlerDeleteitem;
  const todos = obj.todo;
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((Item) => <Other Name={Item.Name} onDeleteClick={()=>remove(Item.Name)} />)
      ) : (
        <h1>enjoy your day</h1>
      )}
    </div>
  );
};

export default Todoitems;
