import { addUser, isUsernameExists, IUserModel } from "@/hooks/localstorage";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState<IUserModel>({
    name: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const resetData = () => {
    setData({
      name: "",
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.name == "" || data.username == "" || data.password == "") {
      setMessage("Please fill all the required field");
      return;
    }

    if (isUsernameExists(data.username)) {
      setMessage("Cann't register. User already exists");
      return;
    }

    addUser(data);
    resetData();
    setMessage("User registered. Jump to Login page");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h3>Register Here</h3>

        <label className="for-logins"> Name </label>
        <input type="text" placeholder="Name*" className="input-for-logins" id="name" value={data.name} required />

        <label className="for-logins"> Username </label> 
        <input type="text" placeholder="Email*" className="input-for-logins" id="username" value={data.username} required />

        <label className="for-logins"> Password </label> 
        <input type="password" placeholder="Password*" className="input-for-logins" id="password" value={data.password} required />

        <button className="btn-for-logins"> Register </button>
        <div className="social">
          {message && <p>{message}</p>}
          <br />
          <h4>
            Already have an account? <Link to="/login" style={{ textDecoration: 'underline' }}> Login here </Link>
          </h4>
        </div>
      </form>
    </>
  );
};

export default Register;