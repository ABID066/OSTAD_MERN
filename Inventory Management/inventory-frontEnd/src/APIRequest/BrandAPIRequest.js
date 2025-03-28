import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {BaseURL} from "../helper/config.js";
import {getToken} from "../helper/SessionHelper.js";
import {SetBrandList, SetBrandListTotal} from "../redux/state-slice/brand-slice.js";
const AxiHeaderConfig = {headers: {"token": getToken()}}


export async function BrandListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/BrandList/${pageNo}/${perPage}/${searchKeyword}`;

        const res = await axios.get(URL,AxiHeaderConfig);

        store.dispatch(HideLoader());

        if (res.status === 200 && res.data["status"] === "success") {
            if(res.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetBrandList(res.data['data'][0]["Rows"]));
                store.dispatch(SetBrandListTotal(res.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetBrandList([]));
                store.dispatch(SetBrandListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}