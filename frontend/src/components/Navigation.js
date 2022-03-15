import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { logout } from "../reducer/login/index";
import { useDispatch, useSelector } from "react-redux";

import { BsSearch } from "react-icons/bs";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import Register from "./Register";
import { MdLogout } from "react-icons/md";

const Navigation = ({ setHotelName }) => {
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const dispatch = useDispatch();
  const history = useNavigate();
  // const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-4 fixed-top  ">
        <Container fluid>
          <Navbar.Brand href="/home">Good Night</Navbar.Brand>
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
              <span className="ps-3"> Start your search </span>
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
              style={{ maxHeight: "18%" }}
              onHide={() => setShow(false)}
            >
              {/* <Modal.Header closeButton>Find Your Place</Modal.Header> */}
              <Modal.Body>
                <FloatingLabel
                  controlId="floatingInput"
                  label="where do you want to go?"
                  className=" mb-3 w-100"
                >
                  <Form.Control  onChange={(e) => {
                   
                      setHotelName(e.target.value);
                    }}  className="w-50"  type="search" placeholder="..." />
                  <Link className="searchIcon" to="/search">
                    <BsSearch variant="success" />
                  </Link>
                </FloatingLabel>
              </Modal.Body>
            </Modal>

            <Modal
              show={showLogin}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={() => setShowLogin(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Login setShowLogin={setShowLogin} />
              </Modal.Body>
              <Modal.Footer style={{ justifyContent: "center" }}>
                <div className="mt-4 text-center ">
                  {" "}
                  Don't have an account?{" "}
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecorationLine: "underline",
                    }}
                    onClick={() => {
                      setShowLogin(false);
                      setShowSignup(true);
                    }}
                  >
                    {" "}
                    Sign up{" "}
                  </span>
                </div>
              </Modal.Footer>
            </Modal>

            <Modal
              show={showSignup}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={() => setShowSignup(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Sign up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Register
                  setShowSignup={setShowSignup}
                  setShowLogin={setShowLogin}
                />
              </Modal.Body>
              <Modal.Footer style={{ justifyContent: "center" }}>
                <div className="mt-4 text-center ">
                  Already have an account?
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecorationLine: "underline",
                    }}
                    onClick={() => {
                      setShowSignup(false);
                      setShowLogin(true);
                    }}
                    className="open-modal"
                    data-target="signupModal"
                    data-current="loginModal"
                  >
                    Log in
                  </span>
                </div>
              </Modal.Footer>
            </Modal>
            <Nav
              className="ms-auto my-2 my-lg-0 d-flex "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {!state.isLoggedIn ? (
                <>
                  <Nav.Link onClick={() => setShowLogin(true)}>Log in</Nav.Link>
                  <Nav.Link onClick={() => setShowSignup(true)}>
                    Sign up
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>{localStorage.getItem("userName")}</Nav.Link>

                  <Nav.Link
                    className="auth-button"
                    onClick={() => {
                      dispatch(logout());
                      localStorage.clear();
                      history("/home");
                    }}
                    to="/home"
                  >
                    <MdLogout size={25} />
                  </Nav.Link>
                </>
              )}

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
