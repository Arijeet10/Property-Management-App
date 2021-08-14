import React, { useState,useEffect } from "react";
import Home from "./components/index";
import Add from "./components/add";
import axios from "axios";

function App() {
  const [propItems, setPropItems] = useState([]);
  const [addItem, setAddItem] = useState({})

  function addPropItem(addItem) {
    setAddItem(addItem)
    axios.post("http://localhost:5000/home/add", addItem)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err) })
  }

  const showProperties = async () => {
    const properties = await axios.get("http://localhost:5000/home/")
    setPropItems(properties)
  }

  useEffect(() => {
    showProperties();
  }, [propItems]);

  function deleteProp(uniqueId) {
    axios.delete("http://localhost:5000/home/" + uniqueId)
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err) })
  }

  return (
    <div className="App">
      <Add addPropItem={addPropItem} item={addItem} />
      {propItems.data && propItems.data.map(
        (propValue, index) => {
          return (<Home key={index} uniqueId={propValue._id} deleteProp={deleteProp} propName={propValue.Name} desc={propValue.Description} size={propValue.Size} />)
        })}
    </div>
  );
}

export default App;
