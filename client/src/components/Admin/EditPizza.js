import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById } from "../../actions/pizzaAction";

const EditPizza = ({match}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzaById(match.params.pizzaId));
  }, [dispatch]);
  return (
    <div>
      <h1>Edit Pizza Component</h1>
    </div>
  );
};

export default EditPizza;
