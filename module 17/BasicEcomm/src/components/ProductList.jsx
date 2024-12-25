import React, {useEffect, useState} from 'react';
import axios from "axios";
import Helper from "../utiliy/Helper.js";
import FullScreenLoader from "./FullScreenLoader.jsx";
import toast from "react-hot-toast";

const ProductList = () => {

    let [products, setProducts] = useState(null);
    let [loader, setLoader] = useState(false);


    useEffect(() => {
        (async ()=>{
           await callProductList()
        })()
    }, []);


    const callProductList = async () =>{
        let res = await axios.get(`${Helper.MY_API_BASE}/product-list`)
        setProducts(res.data['data'])
    }

    const AddToCart =async (id)=>{
        try{
            setLoader(true);
            let res =await axios.get(`${Helper.MY_API_BASE}/create-cart/${id}`, Helper.tokenHeader())
            setLoader(false);
            if(res.data['msg']==='success'){
                toast.success("Successfully added to cart")
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
            {products===null || loader?(<FullScreenLoader/>):(
                <div className="container mt-3">
                    <div className="row">
                        {
                            products.map((item,i)=>{
                                return (

                                    // eslint-disable-next-line react/jsx-key
                                    <div className="col-md-3 p-1">
                                        <div className="card p-3">
                                        <img className=" w-100 " src={item['image']} alt="Product Image"/>
                                        <h5>Price: $ {item['discount']===0?(<span>{item['price']}</span>):(
                                                <span><strike>{<span>{item['price']}</span>}</strike>{<span>  {item['discount_price']}</span>}</span>
                                            )}
                                        </h5>

                                        <p>{item['title']}</p>
                                        <button onClick={async ()=> {await AddToCart(item['id'])}} className="btn btn-outline-danger">Add to Cart</button>
                                    </div></div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;