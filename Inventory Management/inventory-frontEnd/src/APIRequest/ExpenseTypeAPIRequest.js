import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import axios from "axios";
import {AxiHeader, BaseURL} from "../helper/config.js";
import {SetExpenseTypeList, SetExpenseTypeListTotal} from "../redux/state-slice/expenseType-slice.js";


export async function ExpenseTypeListRequest(pageNo, perPage, searchKeyword) {

    try {
        store.dispatch(ShowLoader());

        let URL = `${BaseURL}/ExpenseTypesList/${pageNo}/${perPage}/${searchKeyword}`;

        const res2 = await axios.get(URL,AxiHeader());

        store.dispatch(HideLoader());

        if (res2.status === 200 && res2.data["status"] === "success") {
            if(res2.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetExpenseTypeList(res2.data['data'][0]["Rows"]));
                store.dispatch(SetExpenseTypeListTotal(res2.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetExpenseTypeList([]));
                store.dispatch(SetExpenseTypeListTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}