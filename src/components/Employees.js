import React from "react";
// import "./style.css";


function Employees(props) {
  // Setting our component's initial state
 
  return (
    <>
      {props.employees.filter((employee) => employee.name.last.toLowerCase().includes(props.search.toLowerCase())).map((employee, i) => {
        return (
          <div className="card mt-5 mb-2 mr-4" key={i} style={{ width: "300px" }}>
            <img
              src={employee.picture.large}
              className="card-img-top"
              alt="notworking"
            />
            <div className="card-body">
              <h5 className="card-title">
                {employee.name.title} {employee.name.first}{" "}
                {employee.name.last}
              </h5>
              <p className="card-text">Gender: {employee.gender}</p>
              <p className="card-text">Email: {employee.email}</p>
              <p className="card-text"> Phone: {employee.phone}</p>
              <p className="card-text">
                Location: {employee.location.city}, {employee.location.state},{" "}
                {employee.location.country}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Employees;
