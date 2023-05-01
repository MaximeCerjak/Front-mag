import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:8000/',
});

export const fetchPictures = () => async (dispatch) => {
    try {
        const response = await instance.get('/api/pictures');
        dispatch({ type: 'FETCH_PICTURES_SUCCESS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
};