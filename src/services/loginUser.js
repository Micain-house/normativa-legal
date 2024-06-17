import axios from 'axios';
const API_BASE_URL = ''; 
const token = process.env.REACT_APP_USER_CREATE_TOKEN;

export const loginUser = async (email, password) => {

    
    console.log('login:', email); 
    const data = JSON.stringify({
        email,
        password
    });

    const config = {
        method: 'post',
        url: `${API_BASE_URL}/user`, 
        headers: {
            'Authorization':token, 
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios(config);
        console.log('Respuesta de la API:', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        alert(`Error logging in user: ${error.response ? error.response.data : error.message}`);
        throw error;
    }
};
