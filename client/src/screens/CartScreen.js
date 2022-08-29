import React, {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";

const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Your Order</h1>
                        <Row>
                            {
                                cartItems.map(item => (
                                    <>
                                        <Col md={7}>
                                            <h5>
                                                {item.name}
                                                [{item.variant}]
                                            </h5>
                                            <h6>Price : {item.quantity} x {item.prices[0][item.variant]} = {item.price}</h6>
                                            <h6>
                                                Quantity : &nbsp;
                                                <FaMinusCircle className={"text-danger"}/> &nbsp;
                                                {item.quantity} &nbsp;
                                                <FaPlusCircle className={"text-success"}/>
                                            </h6>
                                        </Col>
                                        <Col md={5}>
                                            <img
                                                alt={item.name}
                                                src={item.image}
                                                style={{width:"80px", height:"80px"}}
                                            />
                                        </Col>
                                        <hr/>
                                    </>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1>Payment</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CartScreen;