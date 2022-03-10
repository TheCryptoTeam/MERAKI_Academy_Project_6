import React from "react";
import { useState } from "react";
import { link, useNavigate } from "react-router-dom";
import Login from "./Login";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";

const Navigation = () => {
  // const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
 
  // window.onscroll = function () {
  //   if (window.scrollY >= 100) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };
  return (
    <>
      <Navbar bg="light" expand="lg" className="px-4 fixed-top  ">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll " className="py-2 mt-2 ">
            {/* <Form className="d-flex ms-auto ">
              
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}

            <div
              className="header-search  d-flex ms-auto d-md-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#headerSearchModal"
              onClick={() => setShow(true)}
            >
              <span class="ps-3"> Start your search </span>
              <Button
                variant="success"
                className="d-flex ms-auto rounded-circle p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </div>
            <Modal
              show={show}
              fullscreen={true}
              style={{ maxHeight: "30%" }}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body></Modal.Body>
            </Modal>

            <Modal
              show={showLogin}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={() => setShowLogin(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Login/>
              </Modal.Body>
              <Modal.Footer style={{justifyContent: "center"}} >
              <div  class="mt-4 text-center "> Don't have an account? <a href="#" class="open-modal" data-target="signupModal" data-current="loginModal"> Sign up </a></div>
              </Modal.Footer>
            </Modal>
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => setShowLogin(true)}>Log in</Nav.Link>
              <Nav.Link href="/cities">Sign up</Nav.Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
         */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
