import { useState } from "react";
import ToDoList from "./ToDoList";
function App() {
  const [inputsList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputsList]
    })
    setInputList("");
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text"
            placeholder="Add a Item"
            value={inputsList}
            onChange={itemEvents} />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{Items}</li> */}
            {Items.map((itemval) => {
              return <ToDoList text={itemval} />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
