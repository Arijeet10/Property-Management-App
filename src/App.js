import React, { useState } from "react";
import Home from "./components/index";
import Add from "./components/add";

function App() {
  const [propItems,setPropItems]=useState([]);

  function addPropItem(propItems){
    setPropItems(
      prevItems=>{
        return [...prevItems,propItems]
      }
    )
  }

  function deleteProp(id){
    setPropItems(prevItems=>{
      return prevItems.filter((propVal,index)=>{return index!==id})
    })
  }

  return (
    <div className="App">
      <Add addPropItem={addPropItem} item={propItems} />
      {propItems.map(
        (propValue,index)=>{
          return(<Home key={index} id={index} deleteProp={deleteProp} propName={propValue.fullName} desc={propValue.desc} size={propValue.size}  />)
        })}
    </div>
  );
}

export default App;
