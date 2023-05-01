import api from '../api/api';

export const fetchPictures = () => async (dispatch) => {
    try {
        const response = await api.get('/api/pictures');
        dispatch({ type: 'FETCH_PICTURES_SUCCESS', payload: response.data });
    } catch (error) {
        console.error(error);
    }
};