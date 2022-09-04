import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { deliverOrder, getAllOrders } from "../../actions/orderAction";
import { allUserOrdersReducer } from "../../reducers/orderReducer";
import Loader from "../Loader";
import Error from "../Error";

const OrderList = () => {
  const allOrderState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <div>
      <h1>Order List</h1>
      {loading && <Loader />}
      {error && <Error error="Admin Order request fail" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transactionId}</td>
                <td>£{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? (
                    <h6 className="text-success">Delivered</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
