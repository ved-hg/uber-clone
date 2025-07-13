const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//model for drivers/captain

const captain = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be 3 letters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "First name must be 3 letters long"],
    },
  },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  socketId: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },

  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be 3 letters long"],
    },

    plate: {
      type: String,
      required: true,
      minlength: [3, "Plate must be 3 letters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be greater than 0"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "bike", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
    
    },
    long: {
      type: Number,
     
    },
  },
});

captain.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",});
      return token;}

      captain.methods.comparePassword = async function (password){
          return await bcrypt.compare(password, this.password);
      }
    captain.statics.hashPassword = async function (password){
          return await bcrypt.hash(password, 10);
      }
        
    const captainModel = mongoose.model("captain", captain);
module.exports = captainModel;