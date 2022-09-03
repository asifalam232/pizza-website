const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");

//GET ALL PIZZA || @GET REQUEST
router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/addpizza", async (req, res) => {
  const { pizza } = req.body;
  try {
    const newPizza = new pizzaModel({
      name: pizza.name,
      image: pizza.image,
      variants: [small, medium, large, ExtraLarge],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.status(201).send("New Pizza added");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
