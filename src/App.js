import { useState } from "react";

function App() {
  const [inputsList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemEvents}/>
          <button onClick={listOfItems}>+</button>

          <ol>
            <li>{inputsList}</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
