import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetPurchaseList, SetPurchaseListTotal} from "../redux/state-slice/purchase-slice.js";


export async function PurchaseListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/PurchasesList/${pageNo}/${perPage}/${searchKeyword}`;

        const res2 = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res2.status === 200 && res2.data["status"] === "success") {
            if(res2.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetPurchaseList(res2.data['data'][0]["Rows"]));
                store.dispatch(SetPurchaseListTotal(res2.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetPurchaseList([]));
                store.dispatch(SetPurchaseListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}