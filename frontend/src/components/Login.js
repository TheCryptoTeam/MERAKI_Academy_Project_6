import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GoogleLogin from "react-google-login";

//redax
import { login } from "../reducer/login/index";
import { useDispatch } from "react-redux";
//********************** */

const Login = () => {
 
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onSuccess = (response) => {
    dispatch(login(response.tokenId));
    localStorage.setItem("userToken", response.tokenId);

    localStorage.setItem("userName", response.profileObj.name);
    navigate("/home");

    addNewUserWithGoogle(response.profileObj.name, response.profileObj.email);
  };
  const onFailure = (response) => {
    console.log(response);
  };

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setmessage] = useState("");

  const navigate = useNavigate();

  const body = {
    email: email,
    password: password,
  };

  const loginUser = () => {
    //show backend server
    axios
      //send data from body object
      .post("/login", body)
      .then((result) => {
        dispatch(login(result.data.token));
        localStorage.setItem("userToken", result.data.token);
        localStorage.setItem("userName", result.data.userName);
        localStorage.setItem("myRole", result.data.role);
        localStorage.setItem("myUserId", result.data.userId);
        if (result.data.role === 2) {
          navigate("/ProductsTable");
        } else {
          navigate("/home");
        }
      })
      .catch((err) => {
        //if error
        setmessage(err.response?.data?.message);
      });

    //================================================================
  };

  const addNewUserWithGoogle = async (username, email) => {
    try {
      const result = await axios.post("/users", {
        userName: username,
        email: email,
        password: "123",
        role_id: "1",
      });
      if (result.data.success) {
        navigate("/home");
        body.email = email;
        body.password = "123";
        loginUser();
      }
    } catch (error) {
      body.email = email;
      body.password = "123";
      loginUser();
    }
  };
  return (
    // <div className="main-continar">
    //   <div className="login-continar">
    //     <div className="login-register">
    //       <div className="inner">
    //         <span id="login">Login</span>
    //         <span
    //           id="register"
    //           onClick={() => {
    //             navigate("/register");
    //           }}
    //         >
    //           Register
    //         </span>
    //       </div>
    //     </div>
    //     <div className="login-box-out">
    //       <div className="login-box-inner">
    //         <input
    //           type="email"
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //           placeholder=" Email "
    //           required=""
    //         />
    //         <input
    //           type="password"
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //           placeholder=" Password"
    //           required=""
    //         />
    //         {message ? <p className="Error">{message}</p> : <></>}{" "}
    //         <div className="button-signIn">
    //           <button onClick={loginUser} id="signIn">
    //             Login
    //           </button>
    //         </div>
    //         <br />
    //         <div className="orSection">
    //           <hr />
    //           <button>OR</button>
    //         </div>
    //         
    //       </div>
    //     </div>
    //     <div className="message"> </div>
    //   </div>
    // </div>
    <form
                  method="POST"
                  action=""
                  accept-charset="UTF-8"
                  class=""
                  id="login_form"
                >
                  <input
                    name="_token"
                    type="hidden"
                    value="2YH8uptYzcQefN2HvES4oAhGYTZ6ry3GmgbQpQAr"
                  />
                  <div class="form-floating">
                    <input
                      type="text"
                      name="login_email"
                      class="form-control"
                      placeholder="Email"
                    />
                    <label> Email </label>
                  </div>
                  <span class="text-danger"></span>
                  <div class="password-with-toggler input-group floating-input-group">
                    <div class="form-floating flex-grow-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="login_password"
                        class="password form-control"
                        placeholder="Password"
                      />
                      <label> Password </label>
                    </div>
                    <span class="input-group-text">
                      {/* <i
                        class="icon icon-eye cursor-pointer toggle-password active"
                        area-hidden="true"
                      ></i> */}
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          onClick={() => setShowPassword(false)}
                          className="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                          style={{ cursor: "pointer" }}
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          onClick={() => setShowPassword(true)}
                          class="bi bi-eye-slash-fill"
                          style={{ cursor: "pointer" }}
                          viewBox="0 0 16 16"
                        >
                          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <span class="text-danger"></span>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      class="form-check-input"
                    />
                    <label class="form-check-label" for="remember_me">
                      {" "}
                      Remember Me{" "}
                    </label>
                    <a
                      href="#"
                      class="float-end open-modal"
                      data-current="loginModal"
                      data-target="forgotPasswordModal"
                    >
                      {" "}
                      Forgot Password{" "}
                    </a>
                  </div>
                  <div class="form-group mt-4">
                    <button
                      type="submit"
                      class="btn btn-primary d-flex w-100 justify-content-center"
                    >
                      {" "}
                      Log in{" "}
                    </button>
                    <GoogleLogin
              className="googleButton"
              clientId="284516947033-o1so93qbr9524dea3slu3ik2j01aqtpp.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
                  </div>
                </form>
  );
};
export default Login;
