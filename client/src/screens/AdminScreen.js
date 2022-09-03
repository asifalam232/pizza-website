import React from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import UserList from "../components/Admin/UserList";
import PizzasList from "../components/Admin/PizzasList";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";

const AdminScreen = ({ history }) => {
  return (
    <>
      <Container>
        <Row>
          <h1 className={"text-center bg-dark text-light p-2"}>Admin Panel</h1>
          <Col md={4}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/pizzalist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/admin" component={UserList} exact />
              <Route path="/admin/userlist" component={UserList} exact />
              <Route path="/admin/pizzalist" component={PizzasList} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
