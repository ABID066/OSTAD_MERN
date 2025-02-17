import { ErrorToast, SuccessToast } from "../helper/FormHelper.js";
import axios from "axios";
import store from "../redux/store/store.js";
import { HideLoader, ShowLoader } from "../redux/state-slice/setting-slice.js";
import {getToken, setToken, setUserDetails} from "../helper/SessionHelper.js";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/task-slice.js";

const BaseURL = "https://task-manager-back-end-ivory.vercel.app/api/v1";

const AxiHeader = () => ({
    headers: { "token": getToken() }
});

// Registration
export async function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {
    store.dispatch(ShowLoader());

    let URL = BaseURL + "/registration";
    let PostBody = { email, firstName, lastName, mobile, password, photo };

    try {
        const res = await axios.post(URL, PostBody);

        if (res.status === 200) {
            if (res.data.status === "fail") {
                if (res.data["message"]["keyPattern"]["email"] === 1) {
                    ErrorToast("Email Already Exists!");
                    return false;
                }
                ErrorToast("Something Went Wrong");
                return false;
            } else {
                SuccessToast("Registration Success");
                return true;
            }
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        console.error("Registration Error:", err);
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}

// Login
export async function LoginRequest(email, password) {
    store.dispatch(ShowLoader());

    let URL = BaseURL + "/login";
    let PostBody = { email, password };

    try {
        let res = await axios.post(URL, PostBody);

        if (res.status === 200) {
            setToken(res.data["token"]);
            setUserDetails(res.data["data"]);
            SuccessToast("Login Success");
            return true;
        }
    } catch (err) {
        ErrorToast("Invalid Email or Password"); // More specific error
        console.error("Login Error:", err);
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}

//create task
export async function NewTaskRequest(title, description) {
    store.dispatch(ShowLoader());

    let URL = BaseURL + "/create-task";
    let PostBody = { title, description, status:"New" };

    try {
        let res= await axios.post(URL, PostBody, AxiHeader());
        if (res.status === 200) {
            SuccessToast("New Task Created");
            return true;
        }
        else {
            ErrorToast("Something Went Wrong");
            return false;
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        console.error("Registration Error:", err);
        return false;
    } finally {
        store.dispatch(HideLoader());
    }


}

//show task
export async function TaskListByStatus(Status) {
    store.dispatch(ShowLoader());

    let URL = BaseURL + "/show-tasks/"+Status;

    try {
        let res = await axios.get(URL, AxiHeader());
        if(res.status === 200) {
            if(Status==="New"){
                store.dispatch(SetNewTask(res.data["message"]))
            }
            else if(Status==="Completed"){
                store.dispatch(SetCompletedTask(res.data["message"]));
            }
            else if(Status==="In Progress"){
                store.dispatch(SetProgressTask(res.data["message"]));
            }
            else if (Status==="Canceled"){
                store.dispatch(SetCanceledTask(res.data["message"]));
            }
        } else {
            ErrorToast("Something Went Wrong");
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
    } finally {
        store.dispatch(HideLoader());
    }
}
