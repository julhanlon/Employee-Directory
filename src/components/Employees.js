import React, { useEffect, useState } from "react";
// import "./style.css";
import API from "../utils/API";
import { Container, Row, Col } from "./Grid";

function Employees () {
// Setting our component's initial state
  const [employees, setEmployees] = useState([])

  // Load all employees and store them with setEmployees
  useEffect(() => {
    showEmployees()
  }, [])

   //load all employees
  function showEmployees() {
    API.getEmployees().then((res) => setEmployees(res.data.results)).catch((err) => console.log(err));

   }
  return (
 
     <div>
       {
  employees.map((employee) => {
      return (
        <div className="card mt-5 mb-2" >
    <img src={employee.picture.large} className="card-img-top" alt="notworking"/>
    <div className="card-body">
    <h5 className="card-title">Name: {employee.name.title} {employee.name.first} {employee.name.last}</h5>
    <p className="card-text">Gender: {employee.gender}</p>
    <p className="card-text">Email: {employee.email}</p>
    <p className="card-text"> Phone: {employee.phone}</p>
    <p className="card-text">Location: {employee.location.city}, { employee.location.state}, {employee.location.country}</p>
    </div>
    </div>
    )
    })
   }
    </div>    
)

  


}

export default Employees;
