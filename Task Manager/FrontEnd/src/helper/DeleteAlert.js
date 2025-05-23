import Swal from "sweetalert2";
import { DeleteTask } from "../APIRequest/APIRequest.js";

export async function DeleteAlert(id) {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
        return await DeleteTask(id);
    }
    return false;
}
