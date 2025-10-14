const ACTIVE_USER = "active_user";

export interface IUserModel { email: string; token?: string; name? :string }
// const BASE_URL = import.meta.env.REACT_APP_BASE_URL || 'https://afriguard.myfamilycompanion.org/api/v1';

const loginUser = async (email: string, password: string): Promise<IUserModel | null> => {
  try {
    console.log("inside the try catch already ");
    const response = await fetch(`https://afriguard.myfamilycompanion.org/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer base64:GD4ZUt2F8g05F1JDfbEjTrHUw3lhCNGdUUOrxyUNPnA=`,
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    console.log(response);
    console.log(result);

    if (response.ok && result.message === 'Login Successful') {
      const user: IUserModel = {
        email,
        token: result?.token,
        name: result.user?.name
      };
      localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
      return user;
    }
    return null;
  } catch (error) {
    console.error('Login API error:', error);
    return null;
  }
};

const registerUser = async (name: string, email: string, phone: string, password: string): Promise<IUserModel | null> => {
  try {
    const response = await fetch(`https://afriguard.myfamilycompanion.org/api/v1/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, password }),
    });

    const result = await response.json();
    // console.log(result.errors.email);
    // console.log(response);

    if (response.ok && result.message === 'Registration Successful') {
      const user: IUserModel = {
        email: email,
        token: result?.token,
        name: result.user?.name
      };
    //   console.log(result);
      localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
      return user;
    }
    
    return null;
  } catch (error) {
    console.error('Registration API error:', error);
    return null;
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

export { ACTIVE_USER, loginUser, getActiveUser, removeActiveUser, registerUser };