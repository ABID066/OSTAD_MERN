import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetCustomerList, SetCustomerListTotal} from "../redux/state-slice/customer-slice.js";


export async function CustomerListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/CustomerList/${pageNo}/${perPage}/${searchKeyword}`;

        const res = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res.status === 200 && res.data["status"] === "success") {
            if(res.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetCustomerList(res.data['data'][0]["Rows"]));
                store.dispatch(SetCustomerListTotal(res.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetCustomerList([]));
                store.dispatch(SetCustomerListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}