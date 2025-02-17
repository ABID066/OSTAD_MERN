import { ErrorToast, SuccessToast } from "../helper/FormHelper.js";
import axios from "axios";
import store from "../redux/store/store.js";
import { HideLoader, ShowLoader } from "../redux/state-slice/setting-slice.js";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper.js";

const BaseURL = "https://task-manager-back-end-ivory.vercel.app/api/v1";

// Generate headers dynamically to ensure updated token
const getHeaders = () => ({
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
                if (res.data["message"]?.["keyPattern"]?.["email"] === 1) {
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
        ErrorToast("Invalid Email or Password");
        console.error("Login Error:", err);
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}

// Create Task ✅ Fixed
export async function NewTaskRequest(title, description) {
    store.dispatch(ShowLoader());

    let URL = BaseURL + "/create";
    let PostBody = { title, description, status: "New" };

    try {
        let res = await axios.post(URL, PostBody, getHeaders()); // ✅ Updated to use latest token
        if (res.status === 200) {
            SuccessToast("New Task Created");
            return true;
        } else {
            ErrorToast("Something Went Wrong");
            return false;
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        console.error("Create Task Error:", err);
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}
