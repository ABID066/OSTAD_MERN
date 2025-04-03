import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetReturnList, SetReturnListTotal} from "../redux/state-slice/return-slice.js";


export async function ReturnListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/ReturnList/${pageNo}/${perPage}/${searchKeyword}`;

        const res = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res.status === 200 && res.data["status"] === "success") {
            if(res.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetReturnList(res.data['data'][0]["Rows"]));
                store.dispatch(SetReturnListTotal(res.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetReturnList([]));
                store.dispatch(SetReturnListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}