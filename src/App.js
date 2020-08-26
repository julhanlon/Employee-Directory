import React, { useEffect, useState } from "react";
import './App.css';
import Nav from "../src/components/Nav.js"
import Employees from "./components/Employees.js"
import Button from "./components/Button.js"
import API from "./utils/API";

let styles = {
  cardDiv: {
    display: 'flex',
    flexWrap: "wrap",
  },
  buttonDiv: {
    display: 'flex',
  }
}

function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  // Load all employees and store them with setEmployees
  useEffect(() => {
    showEmployees();
  }, []);

  useEffect(() => {
    console.log(search);
  }, [search]);

  function handleInputChange (event) {
    const value = event.target.value;
    const name = event.target.name;
    setSearch(value);
  };

  //load all employees
  function showEmployees() {
    API.getEmployees()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log(err));
  }


//   function sortNames() {
// employees.sort((a,b) => {
//   if (a.name.last < b.name.last) {
//     return -1;
//   }
//   if (a.name.last > b.name.last) {
//     return 1;
//   } return 0;
// })
//   }

  function sortNames() {
    employees.sort((a,b) => 
    (a.name.last < b.name.last) ? -1 : 1)
      setEmployees([...employees])
    }
  

  return (
    <div>
      <Nav />

      <div className="container">
        <div className="input-group mb-3 mt-5">
          <div className="input-group-prepend">
          </div>
          <input type="text" className="form-control" placeholder="Search by Last Name" onChange={handleInputChange} />
        </div>
          <div className="mt-5">
            <Button text={"Sort Name"} onClick={() => sortNames()} />
          </div>
          <div className="container" style={styles.cardDiv}>
            <Employees employees={employees} search ={search} />
          </div>
        </div>

  </div>
  );
}

export default App;
