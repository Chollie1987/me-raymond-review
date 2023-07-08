"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const vehicle = require("./vehicle.model.js");
const car = require("./car.model.js");
require("dotenv").config();

const POSTGRES_URI =
  process.env.NODE_ENV === "dev" ? "sqlite:memory" : process.env.DATABASE_URI;

const sequelize = new Sequelize(POSTGRES_URI);

console.log('sequelize', sequelize.options.dialect);
console.log('Car', car);

module.exports = {
  dbInstance: sequelize,
  Car: car(sequelize, DataTypes),
  Vehicle: vehicle(sequelize, DataTypes)
};
