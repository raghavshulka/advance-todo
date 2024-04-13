import { createContext } from "react";
import { useState } from "react";

export const TodoItem = createContext({
    todo : [],
    handler: ()=>{},
    handlerDeleteitem: ()=>{},
  });

  
  const Store = ({children}) => {
    const [todo, addTodo] = useState([]);

    const handler = (itemName) => {
      const newtodo = [...todo, { Name: itemName }];
      addTodo(newtodo);
    };
  
    const handlerDeleteitem = (todoitem) => {
      const newtodo = todo.filter((item) => item.Name !== todoitem);
      addTodo(newtodo);
    };
    return (
      <TodoItem.Provider value={{
        todo,
        handler,
        handlerDeleteitem,
      }}>
        {children}
      </TodoItem.Provider>
    )
  }
  
  export default Store
