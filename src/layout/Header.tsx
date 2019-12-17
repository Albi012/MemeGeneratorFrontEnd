import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Meme App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="create">Create</Nav.Link>
            <Nav.Link href="leaderboard">Leaderboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
