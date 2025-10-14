const ACTIVE_USER = "active_user";

export interface IUserModel { username: string; token?: string; }

const loginUser = async (username: string, password: string): Promise<IUserModel | null> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok && result.status === 'success') {
      const user: IUserModel = {
        username,
        token: result.data?.token,
      };
      console.log(result);
    //   localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
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
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, password }),
    });

    const result = await response.json();

    if (response.ok && result.status === 'success') {
      const user: IUserModel = {
        username: email, // Using email as username for consistency
        token: result.data?.token,
      };
      console.log(result);
    //   localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
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