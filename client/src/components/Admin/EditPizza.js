import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPizza, getPizzaById, updatePizza } from "../../actions/pizzaAction";
import Loader from "../Loader";
import Error from "../Error";
import { updatePizzaByIdReducer } from "../../reducers/pizzaReducer";

const EditPizza = ({ match }) => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [ExtraLargePrice, setExtraLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { loading, error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading, updatesuccess, updateerror } = updatePizzaState;
  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaId) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setImage(pizza.image);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setExtraLargePrice(pizza.prices[0]["ExtraLarge"]);
      } else {
        dispatch(getPizzaById(match.params.pizzaId));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaId));
    }
  }, [pizza, dispatch]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: match.params.pizzaId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
        ExtraLarge: ExtraLargePrice,
      },
    };
    dispatch(updatePizza(updatedPizza));
  };

  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="Add new pizza error" />}
      {/*{success && <Success success="Pizza added successfully" />}*/}
      <Form onSubmit={submitForm} className="bg-light pd-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
                placeholder="price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
                placeholder="price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large</Form.Label>
              <Form.Control
                type="text"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                placeholder="price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>E-Large</Form.Label>
              <Form.Control
                type="text"
                value={ExtraLargePrice}
                onChange={(e) => setExtraLargePrice(e.target.value)}
                placeholder="price"
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Ingredients"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Add Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Pizza
        </Button>
      </Form>
    </div>
  );
};

export default EditPizza;
