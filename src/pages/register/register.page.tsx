import "./register.styles.css";
import { registerUser } from "@/hooks/localstorage";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


interface IRegisterModel { name: string; email: string; phone: string; password: "" }

const Register = () => {
  const [data, setData] = useState<IRegisterModel>({ name: "", email: "", phone: "", password: "" });
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

    if (data.name === "" || data.email === "" || data.phone === "" || data.password === "") {
      setMessage("Please fill all the required fields");
      Swal.fire({ icon: 'error', title: 'Error', text: 'Please fill all the required fields', });
      return;
    }

    setLoading(true); // Start loading
    const user = await registerUser(data.name, data.email, data.phone, data.password);
    setLoading(false); // Stop loading

    if (!user) {
      Swal.fire({ icon: 'error', title: 'Registration Failed', text: 'Could not register. Please try again.', });
      return;
    }

    Swal.fire({ icon: 'success', title: 'Registration Successful', text: 'Your account has been created!', timer: 3000,
    }).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit} className="registeration">
        <h3>Register Here</h3>

        <label className="for-register"> Name </label>
        <input type="text" placeholder="Name*" className="input-for-register" id="name" value={data.name} onChange={handleInputChange} required />

        <label className="for-register"> Email Address </label> 
        <input type="email" placeholder="Email*" className="input-for-register" id="email" value={data.email} onChange={handleInputChange} required />


        <label className="for-register"> Phone Number </label> 
        <input type="text" placeholder="Phone*" className="input-for-register" id="phone" value={data.phone} onChange={handleInputChange} required />

        <label className="for-register"> Password </label> 
        <input type="password" placeholder="Password*" className="input-for-register" id="password" value={data.password} onChange={handleInputChange} required />

        <button className="btn-for-logins" disabled={loading}>
          {loading ? (
            <> <span className="spinner"></span> Loading... </>
          ) : ( 'Register' )}
        </button>
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