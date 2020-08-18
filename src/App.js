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
                  <Col size="xs-12 lg-6">
             <Card/>
                  </Col>
                </Row>
              </Container>
    </div>
  );
}

export default App;
