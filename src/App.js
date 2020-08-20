import React from "react";
import './App.css';
import Nav from "../src/components/Nav.js"
import Employees from "./components/Employees.js"
import { Container, Row, Col } from "./components/Grid";
import Button from "./components/Button.js"

function App() {


  function sortNames() {

  }

  return (
    <div>
   <Nav/>
   <div className = "container">
   <div className = "mt-5">
                <Button text ={"Sort Name"} onClick={() => sortNames()}/>
          </div>
   <div className = "container">
     <div className = "row"> 
       <Employees/>
     </div>
   </div>
   </div>

    </div>
  );
}

export default App;
