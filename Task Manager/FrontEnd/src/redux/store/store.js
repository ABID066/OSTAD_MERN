import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/setting-slice.js"
import taskReducer from "../state-slice/task-slice.js";

export default configureStore({
    reducer:{
        settings: settingsReducer,
        task: taskReducer

    }
});