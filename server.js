import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

mongoose.connect(process.env.mongoConnection)

const app =express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templets');

app.listen(prcess.env.port, () => {
    console.log('started the app on http://localhost:' +port);

})