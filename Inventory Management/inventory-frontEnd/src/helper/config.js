import {getToken} from "./SessionHelper.js";

export const BaseURL="https://inventory-back-end.vercel.app/api/v1";

export const AxiHeader = () => ({
    headers: { "token": getToken() }
});