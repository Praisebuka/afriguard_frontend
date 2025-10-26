import Swal from "sweetalert2";

const ACTIVE_USER = "active_user";

export interface IUserModel { email: string; token?: string; name? :string }

export interface INmapModel { target: string; }

const loginUser = async (email: string, password: string): Promise<IUserModel> => { 
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    // console.log('result message: ' + result.message);
    
    if (!response.ok && (result.message !== 'Login Successful')) {
      Swal.fire({ icon: 'error', title: 'Error', text: result.message });
      throw new Error(result.message || 'An unknown error occurred.');
    }

    // only runs on success
    const user: IUserModel = { email, token: result?.token, name: result.user?.name };
    localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
    return user;

  } catch (error) {
    console.error('Login API error:', error);
    throw error;
  }
};


const registerUser = async (name: string, email: string, phone: string, password: string): Promise<IUserModel | null> => {
  try {
    // const response = await fetch(`https://afriguard.myfamilycompanion.org/api/v1/register`, {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, password }),
    });

    const result = await response.json();
    // console.log('result message: ' + result.message);

    if (!response.ok && (result.message !== 'Registration Successful')) {
      let errorMessage = 'An unknown error occurred.';

      if (result.errors) {
        const firstErrorKey = Object.keys(result.errors)[0]; 
        errorMessage = result.errors[firstErrorKey][0];  
      } else if (result.message) {
        errorMessage = result.message; 
      }
      
      throw new Error(errorMessage);

      // Swal.fire({ icon: 'error', title: 'Error', text: result.message });
      // throw new Error(result.message || 'An unknown error occurred.');
    }

    const user: IUserModel = { email, token: result?.token, name: result.user?.name };
    localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
    return user;

  } catch (error) {
    console.error('Registration API error:', error);
    throw error;
  }
};


const getActiveUser = (): IUserModel | null => {
  const userStr = localStorage.getItem(ACTIVE_USER);
  if (!userStr) return null;
  return JSON.parse(userStr) as IUserModel;
};

const removeActiveUser = () => {
  localStorage.removeItem(ACTIVE_USER);
};



const getNmapVuln = async (target: string): Promise<INmapModel | null> => {
  const user = getActiveUser();
  if (!user || !user.token) {
    Swal.fire({ icon: 'error', title: 'Error!', text: 'User not authenticated. Please log in & try again' });
    throw new Error('User not authenticated. Please log in & try again.');
  }

  try {

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/nmap-scan`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify({ target }),
    });

    // const result = await response.json();
    const result = await response.json().catch(() => ({}));
    console.log('result message: ' + result.message);

    if (!response.ok && (result.message !== 'Scan request queued successfully')) {
      let errorMessage = 'An unknown error occurred.';

      if (result.errors) {
        const firstErrorKey = Object.keys(result.errors)[0]; 
        errorMessage = result.errors[firstErrorKey][0];  
      } else if (result.message) {
        errorMessage = result.message; 
      }
      
      throw new Error(errorMessage);
    }

    const resp: INmapModel = { target: result?.data };
    return resp;

  } catch (error) {
    console.error('Nmap Calls error:', error);
    throw error;
  }
};


export { ACTIVE_USER, loginUser, getActiveUser, removeActiveUser, registerUser, getNmapVuln };