import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utiliy/Helper.js";
import toast from "react-hot-toast";
import FullScreenLoader from "./FullScreenLoader.jsx";


const CartList = () => {

    let [products, setProducts] = useState(null);
    let [loader, setLoader] = useState(false);


    useEffect(() => {
        (async ()=>{
            await callCartList()
        })()
    }, []);

    const callCartList = async () =>{
       try {
           let res = await axios.get(`${Helper.MY_API_BASE}/cart-list`, Helper.tokenHeader())
           setProducts(res.data['data'])
       } catch (e) {
           Helper.Unauthorized(e.response.status);
       }
    }

    const RemoveToCart =async (id)=>{
        try{
            setLoader(true);
            let res =await axios.get(`${Helper.MY_API_BASE}/remove-cart/${id}`, Helper.tokenHeader())
            setLoader(false);
            if(res.data['msg']==='success'){
                toast.success("Successfully added to cart")
                await callCartList();
            } else {
                toast.error("Something went wrong")
            }
        } catch (e) {

            if (e.response) {
                Helper.Unauthorized(e.response.status);
            } else {
                toast.error("An error occurred");
            }
        }
    }


    return (
        <div>
            {products === null || loader ? (<FullScreenLoader/>) : (
                <div className="container mt-3">
                    <div className="row">
                        {
                            products.map((item, i) => {
                                return (

                                    <div className="col-md-3 p-1">
                                        <div className="card p-3">
                                            <img className=" w-100 " src={item['product']['image']} alt="Product Image"/>
                                            <h5>Price: $ {item['product']['discount'] === 0 ? (<span>{item['product']['price']}</span>) : (
                                                <span><strike>{<span>{item['product']['price']}</span>}</strike>{
                                                    <span>  {item['product']['discount_price']}</span>}</span>
                                            )}
                                            </h5>

                                            <p>{item['product']['title']}</p>
                                            <button onClick={async () => {
                                                await RemoveToCart(item['product']['id'])
                                            }} className="btn btn-outline-danger">Remove
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;