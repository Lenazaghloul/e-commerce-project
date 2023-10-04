import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Slice/CartSlice';
// import languageSlice from './Slices/language';

export default configureStore({
    reducer: {
        counter: counterSlice,
        // language : languageSlice
    }
})