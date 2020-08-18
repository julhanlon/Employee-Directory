import React from 'react';
import './App.css';
import Nav from "../src/components/Nav.js"
import Card from "../src/components/Card.js"
import { Container, Row, Col } from "./components/Grid";

function App() {
  return (
    <div>
   <Nav/>
   <Container>
                <Row>
                  <Col size="xs-9 sm-10">
             <Card/>
                  </Col>
                </Row>
              </Container>
    </div>
  );
}

export default App;
