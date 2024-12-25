import  { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";
import FullScreenLoader from "../Loader/FullScreenLoader.jsx";


const UpdateProduct = () => {

    let {id}= useParams();
    const navigate = useNavigate();

    const [foodData, setFoodData] = useState({
        id: id, name: '', code: '', img: '', category: '', quantity: '', price: '' });
    
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [id]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`https://food-item-black.vercel.app/api/v1/readOneProduct/${id}`);
            //console.log(res.data['message']);
            setFoodData({
                id: id,
                name: res.data['message']['name'],
                code: res.data['message']['code'],
                img: res.data['message']['img'],
                category: res.data['message']['category'],
                quantity: res.data['message']['quantity'],
                price: res.data['message']['price'],
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting data:', foodData); // Log the data being sent
            const res = await axios.post(`https://food-item-black.vercel.app/api/v1/updateProduct/${id}`, foodData);
            console.log('API response:', res.data); // Log the API response
            if (res.data['status'] === "success") {
                toast.success('Product updated successfully.');
                navigate('/');
            } else {
                toast.error("Update Failed: " + res.data['message']);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("An error occurred while updating the product.");
        }
    };

    return (<>
            {loading && <FullScreenLoader />}
        <Container>
            <h1>Update Food Item</h1>
            <Form style={{ marginTop: '70px', marginBottom: "30px" }} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group controlId="formFoodName">
                            <Form.Label>Food Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter food name"
                                name="name"
                                value={foodData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group controlId="formFoodCode">
                            <Form.Label>Food Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter food code"
                                name="code"
                                value={foodData.code}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group controlId="formFoodImage">
                            <Form.Label>Food Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                name="img"
                                value={foodData.img}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group controlId="formFoodCategory">
                            <Form.Label>Food Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter food category"
                                name="category"
                                value={foodData.category}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group controlId="formFoodQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter quantity"
                                name="quantity"
                                value={foodData.quantity}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Form.Group controlId="formFoodPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                name="price"
                                value={foodData.price}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </Container>
        </>
    );
};

export default UpdateProduct;
