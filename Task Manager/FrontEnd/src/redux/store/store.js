import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/setting-slice.js"

export default configureStore({
    reducer:{
        settings: settingsReducer
    }
});