import React, {useEffect, useState} from 'react';
import axios from "axios";
import {toast, Toaster} from "react-hot-toast";
import FullScreenLoader from "../Loader/FullScreenLoader.jsx";



const ReadPage = () => {

    const [productData, setProductData] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetchData();
    }, [refresh]);



    const fetchData = async () => {
        let response = await axios.get("https://crud.teamrabbil.com/api/v1/readproduct");
        let productList= response.data['data'];
        setProductData(productList);
        setLoading(false);
    }

    const deleteProduct = async (id) => {
        setLoading(true);
        let res = await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`);
        let deleteStatus=res.data['status'];
        if(deleteStatus==="success"){
            toast.success('Product deleted successfully.');
            setRefresh(refresh+1);
        } else

            toast.error("Delete Failed");
        }



    return (
        <>
            {loading && <FullScreenLoader />}
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>ProductList</h1>
                    <button className="btn btn-primary" onClick={()=>setRefresh(refresh+1)}>Refresh</button>
                    <table className="table table-striped table-bordered text-center top-50">
                        <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Code</th>
                            <th scope="col">Image</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            productData.length > 0 &&
                            productData.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item['ProductName']}</td>
                                        <td>{item['ProductCode']}</td>
                                        <td><img style={{width: '30px', height: 'auto'}} src={item['Img']} alt="img"/>
                                        </td>
                                        <td>{item['UnitPrice']}</td>
                                        <td>{item['Qty']}</td>
                                        <td>{item['TotalPrice']}</td>
                                        <button onClick={() => deleteProduct(item['_id'])}
                                                className="btn btn-danger">Delete
                                        </button>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
                <Toaster/>
            </div>
        </>
    )
};

export default ReadPage;