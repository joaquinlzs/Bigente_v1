import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice'; // Asegúrate de importar correctamente
import navbarReducer from './navbarSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer, // Agrega otros reducers aquí
    navbar: navbarReducer,
  },
});

export default store;