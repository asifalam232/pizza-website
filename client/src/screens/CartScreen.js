import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Your Order</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name}[{item.variant}]
                    </h5>
                    <h6>
                      Price : {item.quantity} X {item.prices[0][item.variant]} ={" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity:
                      <FaMinusCircle
                        className={"text-danger"}
                        style={{ cursor: "pointer" }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className={"text-success"}
                        style={{ cursor: "pointer" }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "80px", height: "80px" }}
                    />
                  </Col>
                  <hr/>
                </>
              ))}
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
