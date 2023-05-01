import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:8000/',
});

const loginUser = async (email, password) => {
    try {
        const response = await instance.post('/login', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default { loginUser, instance };