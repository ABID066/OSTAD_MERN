
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {

    const navigate = useNavigate()

    const [foodData, setFoodData] =
            useState({name: '', code: '', img: '', category: '', quantity: '', price: ''});

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFoodData({
                ...foodData,
                [name]: value
            });
        };

        const handleSubmit =async (e) => {
            e.preventDefault();
            // Handle form submission
            //console.log('Form data:', foodData);
            try {
                const res = await axios.post("https://food-item-black.vercel.app/api/v1/createProduct", foodData);
                if (res.data['status'] === "success")
                {
                    toast.success('Product deleted successfully.');
                    navigate('/')

                } else{
                    toast.error("Delete Failed");
                }

            } catch (error) {
                console.error('Error:', error);
            }
        };


    return (
        <Container>
            <h1>Create Food Item</h1>
            <Form style={{ marginTop: '70px' }} onSubmit={handleSubmit}>
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
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default CreateProduct;