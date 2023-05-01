// src/actions/authActions.js
import api from '../api/api';

export const login = (email, password) => async (dispatch) => {
    try {
        const response = await api.post('/api/login_check', { email, password });
        const token = response.data.token;

        // Store token in localStorage
        localStorage.setItem('token', token);
        console.log('token:', token);
        // Fetch user profile
        dispatch(fetchUserProfile(token));
    } catch (error) {
        console.error('Error during login:', error);
    }
};

export const loginSuccess = (token, roles, id) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token, roles, id },
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const logoutUser = () => async (dispatch) => {
    try {
        // Remove token from localStorage
        localStorage.removeItem('token');
        // Remove token from axios headers
        api.defaults.headers.common.Authorization = null;
        // Remove user from store
        dispatch(logout());
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

export const fetchUserProfile = (token) => async (dispatch) => {
    try {
        const response = await api.get('/api/user/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const {roles, id} = response.data;

        console.log('loginSuccess(token, roles, id):', token, roles, id);

        dispatch(loginSuccess(token, roles, id));
    } catch (error) {
        console.error('Error during fetchUserProfile:', error);
    }
};
