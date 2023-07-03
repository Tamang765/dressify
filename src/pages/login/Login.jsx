import React from "react";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./Login.scss";
const Login = () => {
  return (
    <div className="container-fluid">
      <div className="login-form container w-25" style={{ marginTop: "7rem" }}>
        <div className="btn-group d-flex flex-column gap-3">
          <button>
            <AiFillFacebook color="blue" /> Connect with facebook
          </button>
          <button>
            <AiOutlineTwitter /> Connect with facebook
          </button>
          <button>
            <FcGoogle /> Connect with facebook
          </button>
        </div>
        <form className="d-flex flex-column gap-3 mt-5">
          <div className="d-flex flex-column gap-2">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="d-flex flex-column gap-2">
            <div className="forget-pass d-flex justify-content-between">
                          <label>Password</label>
                          <button >Forget Password ?</button>
            </div>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
