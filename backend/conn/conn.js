const mongoose = require('mongoose');
const conn= async(req,res) => {
    try {
        await mongoose
        .connect("mongodb+srv://benison:Pass123@clusterx.3dplc.mongodb.net/")
        .then (() => {
            console.log("Database connected");
    })
    } catch (error) {
        res.status(400).send("Database not connected");
    }
};
conn();