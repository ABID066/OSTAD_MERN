import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import FullScreenLoader from "../Loader/FullScreenLoader.jsx";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";

const ReadProduct = () => {


    let [list, setList] = useState([]);
    let [loading, setLoading] = useState(false);
    let [refreshing, setRefreshing] = useState(0);


    useEffect(() => {

        (async ()=>{
           await fetchData()
        })()
    },[refreshing])

    const fetchData = async () => {
        setLoading(true);
        let res= await axios.get("https://food-item-black.vercel.app/api/v1/readProduct");
        setLoading(false);
        setList(res.data['message']);
    }

    const deleteProduct = async (id) => {
        setLoading(true);
        let res = await axios.get(`https://food-item-black.vercel.app/api/v1/deleteProduct/${id}`);
        if (res.data['status'] === "success")
        {
            toast.success('Product deleted successfully.');
            setRefreshing(refreshing+1);
        } else{
            toast.error("Delete Failed");
        }

    }
    return (
        <div>
        {loading && <FullScreenLoader />}
        <div className="container">
            <h1>All Food List</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {

                    list.map((item, i) => (
                        <Col key={i}>
                            <Card style={{ width: '100%', position: 'relative', marginBottom: '20px' }}>
                                <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'white', padding: '5px', borderRadius: '5px', fontWeight: 'bold' }}>
                                    Tk: {item['price']}
                                </div>
                                <Card.Img variant="top" src={item['img']} />
                                <Card.Body>
                                    <Card.Title>{item['name']}</Card.Title>
                                    <Card.Text>{item['description']}</Card.Text>
                                    <Link to={`/update/${item['_id']}`} className="btn btn-primary" style={{ marginRight: '10px' }}>
                                        Edit
                                    </Link>
                                    <Button variant="danger" onClick={()=>deleteProduct(item['_id'])}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
        </div>
    );
};

export default ReadProduct;
