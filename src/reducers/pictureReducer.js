import { createSlice } from '@reduxjs/toolkit';

const pictureSlice = createSlice({
    name: 'pictures',
    initialState: [],
    reducers: {
        setPictures: (state, action) => action.payload,
        addPicture: (state, action) => [...state, action.payload],
        removePicture: (state, action) => state.filter(picture => picture.id !== action.payload),
    },
});

export const { setPictures, addPicture, removePicture } = pictureSlice.actions;

export default pictureSlice.reducer;
