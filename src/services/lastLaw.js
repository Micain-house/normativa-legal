import axios from 'axios';

const token = process.env.REACT_APP_USER_CREATE_TOKEN;

export const lastLaw = async () => {
  const url = `/normativa/last-law/5`;

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