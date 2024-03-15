import React from 'react';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <h1>Welcome to My App</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>This is card 1</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>This is card 2</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>This is card 3</Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
