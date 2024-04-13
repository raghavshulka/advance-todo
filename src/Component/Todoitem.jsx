import Other from "./Other";
import React, { useState } from "react";
import { TodoItem } from "../Store/Todo-Item-Store";
import { useContext } from "react";

 const Todoitems = () => {
  const {handlerDeleteitem,todo} = useContext(TodoItem);
 
  return (
    <div>
      {todo.length > 0 ? (
        todo.map((Item) => <Other Name={Item.Name} onDeleteClick={()=>handlerDeleteitem(Item.Name)} />)
      ) : (
        <h1>enjoy your day</h1>
      )}
    </div>
  );
};

export default Todoitems;
