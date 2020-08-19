import React, { useEffect, useState } from "react";
// import "./style.css";
import API from "../utils/API"

const Employees = () => {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    showEmployees()
  }, [])

   //load all employees
  function showEmployees() {
    API.getEmployees().then((res) => setEmployees(res.data.results)).catch((err) => console.log(err));


   }
  
employees.map((employee) =>{
  return (
    <div classNagme="card" >
<img src={employee.picture.large} className="card-img-top" alt="notworking"/>
<div className="card-body">
<h5 className="card-title">Name: {employee.name.title} + " " +{employee.name.first} + " " + {employee.name.last}</h5>
<p className="card-text">Email: {employee.email}</p>
<p className="card-text"> Phone: {employee.phone}</p>
<p className="card-text">Birthday:{employee.dob.age}</p>
<p className="card-text">Location: {employee.location.city} + ", " +{ employee.location.state} + " " + {employee.location.country}</p>
</div>
</div>

)
})

}

export default Employees;
