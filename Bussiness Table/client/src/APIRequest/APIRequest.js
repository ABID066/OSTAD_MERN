import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import { SetALLProduct, SetTotal } from "../redux/state-slice/product-slice";
import axios from "axios";


const BaseURL = "http://localhost:8080/api/v1"

export async function getProductList(pageNo, perPage, searchKeyword) {

    store.dispatch(ShowLoader());
    console.log(searchKeyword)


    try {

            let URL = `${BaseURL}/ProductList/${pageNo}/${perPage}/${searchKeyword}`;


        const res = await axios.get(URL);

        store.dispatch(HideLoader());

        if (res.status === 200 && res.data["status"] === "success") {
            if(res.data["data"][0]["Rows"].length > 0){
                store.dispatch(SetALLProduct(res.data['data'][0]["Rows"]));
                store.dispatch(SetTotal(res.data['data'][0]["Total"][0]["count"]));
            } else {
                store.dispatch(SetALLProduct([]));
                store.dispatch(SetTotal([]));

            }
        }
    } catch (error) {
        store.dispatch(HideLoader());
        console.error("Error fetching product list:", error);
    }
}