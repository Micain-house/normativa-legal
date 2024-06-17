import axios from 'axios';
const API_BASE_URL = '';
const token = process.env.REACT_APP_USER_CREATE_TOKEN;


export const createUser = async (name, email, password) => {
    const data = JSON.stringify({
    name: name,
    email: email,
    password: password
  });

  const config = {
    method: 'post',
    url: `${API_BASE_URL}/user/create`,
    headers: { 
      'Authorization': token, 
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    throw error;
  }
};
