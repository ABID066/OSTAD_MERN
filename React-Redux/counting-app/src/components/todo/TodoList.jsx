import React from 'react';
import {useSelector} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert.js";
import {TodoEditAlert} from "./TodoEditAlert.js";

const TodoList = () => {

    const todoItems= useSelector((state)=>state.todo.value);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>No.</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            todoItems.map((item, i) => {
                                return(
                                    <tr key={i.toString()}>
                                        <td>{i+1}</td>
                                        <td>{item}</td>
                                        <td>
                                            <button onClick={()=>{TodoEditAlert(i,item)}} className="btn btn-sm btn-dark">Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={()=>{TodoDeleteAlert(i)}} className="btn btn-sm btn-danger">Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;