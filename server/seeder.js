const mongoose = require('mongoose');
const dotenv =  require('dotenv');
const connectDB = require('./config/config');
require('colors');
const Pizza  = require('./models/pizzaModel');
const Pizzas = require('./data/pizza-data');

//config dotenv and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData = async () => {
    try {
        await Pizza.deleteMany();
        const sampleData = Pizzas.map(pizza => {return {...pizza}});
        await Pizza.insertMany(sampleData);
        console.log('Data Imported'.bgGreen.white);
        process.exit();
    } catch (error) {
        console.log(`${error}`.bgRed.white);
        process.exit(1);
    }
};

const dataDestroy = () => {};

if (process.argv[2] === '-d') {
    dataDestroy();
} else {
    importData();
}