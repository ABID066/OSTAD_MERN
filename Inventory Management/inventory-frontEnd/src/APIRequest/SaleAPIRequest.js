import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetSaleList, SetSaleListTotal} from "../redux/state-slice/sale-slice.js";


export async function SaleListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/SalesList/${pageNo}/${perPage}/${searchKeyword}`;

        const res = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res.status === 200 && res.data["status"] === "success") {
            if(res.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetSaleList(res.data['data'][0]["Rows"]));
                store.dispatch(SetSaleListTotal(res.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetSaleList([]));
                store.dispatch(SetSaleListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}