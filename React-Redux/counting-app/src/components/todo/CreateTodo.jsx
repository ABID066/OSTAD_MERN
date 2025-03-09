import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo} from "../../redux/state/todo/TodoSlice.js";

const CreateTodo = () => {

    const dispatch = useDispatch();
    const taskInput= useRef();


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mb-5">
                    <input ref={taskInput} className="form-control" type="text" placeholder="Task Name" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={()=>{dispatch(AddTodo(taskInput.current.value))}}>Add To Do</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;