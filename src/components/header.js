import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Header() {


    const menuItem=[
        {
            path:"/indonesia",
            name:"Indonesia"
    
        },
        {
            path:"/programming",
            name:"Programming"
            
        },
        {
            path:"/covid",
            name:"Covid-19"
            
        },
        {
          path:"/save",
          name:"SAVE"
          
      },
        
    ]
    
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>News API</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
                menuItem.map((item, index)=>(
                    <Nav.Link as={Link} to={item.path} key={index}>
                        {item.name}
                    </Nav.Link>
                    
                                    
                ))
            }
          </Nav>
          {/* <Form className="d-flex" 
                role="search"
                autoComplete="off"
                
            >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
                
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;