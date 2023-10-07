import React from "react";
import "./App.css";

import {
  BrowserRouter 
  
  ,Routes,Route
 } from "react-router-dom";

//  import Update from "./Components/Update";
import Read from "./Components/Read";
import Create from "./Components/Create";
// import View from "./Components/View";

function App() {
  return (
    <div className="App">

      <h1>Hello</h1>
    <BrowserRouter>
   
    <Routes>
    <Route path="/" element={ <Read/>} />
    <Route path="/create" element={ <Create/>} />
    {/* <Route path="/update/:id" element={ <Update/>} />
    <Route path="/view/:id" element={ <View/>} /> */}
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;

