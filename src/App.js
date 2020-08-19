import React from "react";
import './App.css';
import Nav from "../src/components/Nav.js"
import Employees from "./components/Employees.js"
import { Container, Row, Col } from "./components/Grid";
import Filter from "./components/Filter.js"

function App() {

  return (
    <div>
   <Nav/>
   <Container>
        <Row>
        <Col size="xs-12 lg-2">
                <Filter/>
            </Col>
            <Col size="xs-12 lg-5">
                <Employees/>
            </Col>
            <Col size="xs-12 lg-5">
                <Employees/>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default App;
