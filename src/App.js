import "./App.css";
import Add from "./Component/Add";
import Todoitems from "./Component/Todoitem.jsx";
import Store from "./Store/Todo-Item-Store.jsx";

function App() {
  return (
    <Store>
      <div className="App">
        <Add />
        <Todoitems />
      </div>
    </Store>
  );
}

export default App;
