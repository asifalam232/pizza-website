import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AllPizza from "../pizza-data";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
    return (
        <>
            <Container>
                <Row>
                    { AllPizza.map(pizza => (
                        <Col md={4}>
                            <Pizza pizza={pizza}/>
                        </Col>
                    )) }
                </Row>
            </Container>
        </>
    );
};

export default HomeScreen;