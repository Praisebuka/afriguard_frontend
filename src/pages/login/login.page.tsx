import "./login.styles.css";
import { loginUser } from "@/hooks/localstorage";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface ILoginModel { username: string; password: string; }

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.username === "" || data.password === "") {
      Swal.fire({ icon: 'error', title: 'Error', text: 'Please fill all the required fields' });
      return;
    }

    setLoading(true);

    try {
      // TRY to log the user in
      const user = await loginUser(data.username, data.password);
      if (user.token == "undefined" || user.token == null) {
        Swal.fire({ icon: 'error', title: 'Login Failed', text: 'Invalid username or password', });
        return;
      }

      Swal.fire({ icon: 'success', title: 'Login Successful', text: `Welcome back, ${user.name}!`, timer: 3000,
      }).then(() => {
        navigate("/dashboard");
      });
      setLoading(false);

    } catch (error: any) {
      console.error("Caught login error:", error.message);
      Swal.fire({ icon: 'error', title: 'Login Failed', text: error.message,  });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit} className="login">
        <h3>Login Here</h3>

        <label className="for-logins"> Email Address </label>
        <input type="text" placeholder="Email*" className="input-for-logins" value={data.username} id="username" onChange={handleInputChange} required />

        <label className="for-logins"> Password </label>
        <input type="password" placeholder="Password*" className="input-for-logins" id="password" value={data.password} onChange={handleInputChange} required/>

        <button className="btn-for-logins" disabled={loading}>
          {loading ? (
            <> <span className="spinner"></span> Loading... </>
          ) : (
            'Log In'
          )}
        </button>
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