import axios from 'axios';

const token = process.env.REACT_APP_USER_CREATE_TOKEN;

export const normContent = async (id) => {
  const url = `/normativa/norm-content/${id}`;

  const config = {
    method: 'get',
    url: url,
    headers: { 
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Hubo un problema al procesar la solicitud:', error.response ? error.response.data : error.message);
    throw error;
  }
};
