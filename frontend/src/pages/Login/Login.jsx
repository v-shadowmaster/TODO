import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className=" flex items-center justify-center mt-28">
        <div className="w-96 border rounded   px-7 py-10">
          <form onSubmit={() => {}}>
            <h4 className="text-2xl mb-7"> Login</h4>
            <input type="text" placeholder="email" className="input-box" />
            <button type="submit" className="btn-primary">
              Login
            </button>

            <p>
              Not registered yet?{" "}
              <Link to="/signUP" className="font-medium text-primary underline">
                create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
