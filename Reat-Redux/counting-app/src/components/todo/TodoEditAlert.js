import Swal from "sweetalert2";
import store from "../../redux/store/store.js";
import {EditTodo, RemoveTodo} from "../../redux/state/todo/TodoSlice.js";

export function TodoEditAlert(i,item) {


    Swal.fire({
        title: "Update Take Name",
        input: "text",
        inputValue: item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index: i, task:value}))
            }
        }

    });
}