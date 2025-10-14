import "./login.styles.css";
import { getUser, updateActiveUser } from "@/hooks/localstorage";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ILoginModel {
  username: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
  const navigate = useNavigate();
  
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.username == "" || data.password == "") {
    //   alert("Please fill all the field");
    setMessage("Please fill all the required field");
      return;
    }

    const user = getUser(data.username, data.password);
    if (user == null) {
      alert("Username or password is incorrect");
      return;
    }

    updateActiveUser(user);
    navigate("/");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h3>Login Here</h3>

        <label className="for-logins"> Username </label>
        <input type="text" placeholder="Email*" className="input-for-logins" value={data.username} id="username" required />

        <label className="for-logins"> Password </label>
        <input type="password" placeholder="Password*" className="input-for-logins" id="password" value={data.password}  required/>

        <button className="btn-for-logins"> Log In </button>
        <div className="social">
            {message && <p>{message}</p>}
            <br />
          <h4> Don't have an account? <Link to="/register" style={{ textDecoration: 'underline' }}> Register here </Link> </h4>
        </div>
      </form>
    </>
  );
};

export default Login;