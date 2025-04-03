import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetExpenseList, SetExpenseListTotal} from "../redux/state-slice/expense-slice.js";


export async function ExpenseListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/ExpenseList/${pageNo}/${perPage}/${searchKeyword}`;

        const res1 = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res1.status === 200 && res1.data["status"] === "success") {
            if(res1.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetExpenseList(res1.data['data'][0]["Rows"]));
                store.dispatch(SetExpenseListTotal(res1.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetExpenseList([]));
                store.dispatch(SetExpenseListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}


