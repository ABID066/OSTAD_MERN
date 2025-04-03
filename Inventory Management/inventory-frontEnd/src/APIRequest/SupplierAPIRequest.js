import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetSupplierList, SetSupplierListTotal} from "../redux/state-slice/supplier-slice.js";


export async function SupplierListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/SupplierList/${pageNo}/${perPage}/${searchKeyword}`;

        const res = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res.status === 200 && res.data["status"] === "success") {
            if(res.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetSupplierList(res.data['data'][0]["Rows"]));
                store.dispatch(SetSupplierListTotal(res.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetSupplierList([]));
                store.dispatch(SetSupplierListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}