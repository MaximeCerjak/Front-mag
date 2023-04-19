// src/reducers/authReducer.js
const initialState = {
    token: localStorage.getItem('token'),
    roles: [],
    id: null,
    isAuthenticated: !!localStorage.getItem('token'),
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
        return {
            ...state,
            token: action.payload.token,
            roles: action.payload.roles,
            id: action.payload.id,
            isAuthenticated: true,
        };
        case 'LOGOUT':
            return {
                ...state,
                token: null,
                roles: [],
                id: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
