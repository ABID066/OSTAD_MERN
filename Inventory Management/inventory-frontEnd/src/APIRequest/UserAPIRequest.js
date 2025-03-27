import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice.js";
import store from "../redux/store/store.js";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {ErrorToast, SuccessToast} from "../helper/FormHelper.js";
import axios from "axios";
import {setEmail, setOTP, setToken, setUserDetails} from "../helper/SessionHelper.js";
import {SetProfile} from "../redux/state-slice/profile-slice.js";

const API_ENDPOINTS = {
    REGISTRATION: "/registration",
    LOGIN: "/login",
    VERIFY_EMAIL: "/RecoverVerifyEmail/",
    VERIFY_OTP: "/RecoverVerifyOTP/",
    RESET_PASSWORD: "/RecoverResetPass",
    PROFILE_DETAILS: "/ProfileDetails",
    PROFILE_UPDATE: "/ProfileUpdate"

};

export async function RegistrationRequest(email, firstName, lastName, mobile, password, photo) {

    try {
        store.dispatch(ShowLoader());

        let URL = BaseURL + API_ENDPOINTS.REGISTRATION;
        let PostBody = { email, firstName, lastName, mobile, password, photo };

        const res = await axios.post(URL, PostBody);

        if (res.status === 200) {
            if (res.data.status === "fail" && res.data["message"]["keyPattern"]["email"]) {
                ErrorToast("Email Already Exists!");
                return false;
            } else {
                SuccessToast("Registration Successful");
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


export async function LoginRequest(email, password) {

    try {
        store.dispatch(ShowLoader());

        let URL = BaseURL + API_ENDPOINTS.LOGIN;
        let PostBody = { email, password };

        let res = await axios.post(URL, PostBody);

        if(res.status === 200){
            switch (res.data.status) {
                case "success":
                    setToken(res.data.token);
                    setUserDetails(res.data.data);
                    SuccessToast("Login Success");
                    return true;
                case "unauthorized":
                    ErrorToast(res.data.message === "Invalid email" ? "User does not exist" : "Passwords don't match");
                    return false;
                default:
                    ErrorToast("Login Failed");
                    return false;
            }
        }
    } catch (err) {
        ErrorToast("Login Error"); // More specific error
        console.error("Login Error:", err);
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}



//Recovery section 01: Verify Email
export async function VerifyEmailRequest(email){

    try {
        store.dispatch(ShowLoader());

        let URL = BaseURL + API_ENDPOINTS.VERIFY_EMAIL+ email;

        let res = await axios.post(URL);
        if(res.status === 200) {
            if(res.data["status"]==="success"){
                setEmail(email);
                return true;
            }
            else{
                ErrorToast("User Not Found");
                return false;
            }
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}

//Recovery section 02: Verify OTP
export async function VerifyOTPRequest(email,OTP){

    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL + API_ENDPOINTS.VERIFY_OTP + email + "/" + OTP;
        let res = await axios.post(URL);
        if(res.status === 200) {
            if(res.data["status"]==="success"){
                setOTP(OTP);
                return true;
            }
            else{
                ErrorToast("Invalid OTP");
                return false;
            }
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}

////Recovery section 03: Reset Password
export async function ResetPasswordRequest(email,otp, password){
    store.dispatch(ShowLoader());
    let URL = BaseURL + API_ENDPOINTS.RESET_PASSWORD
    let PostBody = {email,otp,password};
    try {
        let res= await axios.post(URL,PostBody);
        if(res.status === 200) {
            if(res.data["status"]==="success"){
                return true;
            }
            else{
                ErrorToast("Invalid OTP");
                return false;
            }
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        return false;
    } finally {
        store.dispatch(HideLoader());
    }
}

export async function GetProfileDetails() {
    try {
        store.dispatch(ShowLoader());
        const res = await axios.get(BaseURL + API_ENDPOINTS.PROFILE_DETAILS, AxiHeader());
        if (res.status === 200) {
            store.dispatch(SetProfile(res.data.result));
        } else {
            ErrorToast("Something went wrong");
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
    } finally {
        store.dispatch(HideLoader());
    }
}

export async function ProfileUpdate(email,firstName,lastName,mobile, password, photo) {

    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL + API_ENDPOINTS.PROFILE_UPDATE;
        let PostBody = {email,firstName,lastName,mobile, password, photo}

        let res = await axios.post(URL,PostBody,AxiHeader());
        if(res.status === 200) {
            SuccessToast("Profile Updated successfully");
            setUserDetails({email,firstName,lastName,mobile, photo});
            return true;
        } else {
            ErrorToast("Profile Update Failed");
            return false;
        }
    } catch (err) {
        ErrorToast("Something Went Wrong");
        return false;
    } finally {
        store.dispatch(HideLoader());
    }

}

