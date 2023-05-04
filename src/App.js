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
  const deleItems = (id) => {
    console.log("deleted");
    console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index != id;
      })
    })
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
            {Items.map((itemval, index) => {
              return <ToDoList
                text={itemval}
                key={index}
                id={index}
                onSelect={deleItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
