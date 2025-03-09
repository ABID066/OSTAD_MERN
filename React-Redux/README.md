# React-Redux Setup Guide

## Installation

To set up Redux in your React project, install the necessary dependencies:

```sh
npm install @reduxjs/toolkit
npm install react-redux
```

## Creating `store.js`

Create a `store.js` file inside `redux/store/` to configure the Redux store:

```js
import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/setting-slice.js";
import taskReducer from "../state-slice/task-slice.js";
import summaryReducer from "../state-slice/summary-slice.js";
import profileReducer from "../state-slice/profile-slice.js";

export default configureStore({  
    reducer: {  
        settings: settingsReducer,  
        task: taskReducer,  
        summary: summaryReducer,  
        profile: profileReducer  
    },  
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});
```

## Connecting Redux Store in `main.jsx`

Import and wrap the application with the `Provider` component:

```js
import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './App.jsx';  
import "./assets/css/bootstrap.css";  
import "./assets/css/style.css";  
import "./assets/css/animate.min.css";  
import { Toaster } from "react-hot-toast";  
import { Provider } from "react-redux";  
import store from "./redux/store/store.js";  

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>  
      <Provider store={store}>  
          <App />  
          <Toaster/>  
      </Provider>  
  </React.StrictMode>,  
);
```

## Creating `state-slice` Files

### Example: `task-slice.js`

```js
import { createSlice } from "@reduxjs/toolkit";  
  
export const taskSlice = createSlice({  
    name: "task",  
    initialState: {  
        New: [],  
        Completed: [],  
        Progress: [],  
        Canceled: []  
    },  
    reducers: {  
        SetNewTask: (state, action) => { state.New = action.payload; },  
        SetCompletedTask: (state, action) => { state.Completed = action.payload; },  
        SetProgressTask: (state, action) => { state.Progress = action.payload; },  
        SetCanceledTask: (state, action) => { state.Canceled = action.payload; }  
    }  
});  
  
export const { SetNewTask, SetCanceledTask, SetProgressTask, SetCompletedTask } = taskSlice.actions;  
export default taskSlice.reducer;
```

## Dispatching Actions to Store Data

To store values in Redux state, use `store.dispatch()` or `useDispatch()`:

```js
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/state-slice/task-slice.js";
import { HideLoader, ShowLoader } from "../redux/state-slice/setting-slice.js";
import store from "../redux/store/store.js";
import axios from "axios";
import { ErrorToast } from "../utils/notifications";

export async function TaskListByStatus(Status) {  
    store.dispatch(ShowLoader());  
    let URL = `https://api.example.com/show-tasks/${Status}`;  
    
    try {  
        let res = await axios.get(URL);  
        if (res.status === 200) {  
            if (Status === "New") store.dispatch(SetNewTask(res.data["message"]));  
            else if (Status === "Completed") store.dispatch(SetCompletedTask(res.data["message"]));  
            else if (Status === "In Progress") store.dispatch(SetProgressTask(res.data["message"]));  
            else if (Status === "Canceled") store.dispatch(SetCanceledTask(res.data["message"]));  
        } else {  
            ErrorToast("Something Went Wrong");  
        }  
    } catch (err) {  
        console.error("Error fetching task list:", err.message);
        ErrorToast("Something Went Wrong");  
    } finally {  
        store.dispatch(HideLoader());  
    }  
}
```

### Alternative: Using `useDispatch()` inside a Component

```js
import { useDispatch } from "react-redux";
import { SetNewTask } from "../redux/state-slice/task-slice.js";

const MyComponent = () => {
    const dispatch = useDispatch();
    
    const handleTaskUpdate = (data) => {
        dispatch(SetNewTask(data));
    };

    return <button onClick={() => handleTaskUpdate([])}>Update Task</button>;
};
```

## Retrieving Data from Redux Store

Use `useSelector()` to access stored values:

```js
import { useSelector } from "react-redux";

const InProgressList = useSelector((state) => state.task.Progress);
const CanceledList = useSelector((state) => state.task.Canceled);
const NewList = useSelector((state) => state.task.New);
```

---

## Project File Structure

```plaintext
src/
│── APIRequest/
│── assets/
│── components/
│── helper/
│── pages/
│── redux/
│   ├── state-slice/
│   │   ├── profile-slice.js
│   │   ├── setting-slice.js
│   │   ├── summary-slice.js
│   │   ├── task-slice.js
│   ├── store/
│   │   ├── store.js
│── App.jsx
│── main.jsx
```

---

### Summary of Key Concepts

- **Redux store is created in `store.js`** and connected in `main.jsx` using `Provider`.
- **State slices (`task-slice.js`, `profile-slice.js`, etc.) define state and reducers.**
- **Use `store.dispatch(action)` to update Redux state.**
- **Use `useSelector()` to access Redux state inside components.**

This guide provides a structured and clear approach to setting up Redux in your React project. 🚀

