import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../state/counter/counterSlice.js"
import todoReducer from "../state/todo/TodoSlice.js"

export default configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})