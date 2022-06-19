import express from "express";
import { saveRequest, getRequestedFormData } from "../controller/api.js";
const app = express.Router();
// * create data in mongodb database
app.post("/students", saveRequest);

//* read data from mongodb database
app.get("/requestlist", getRequestedFormData);

export default app;
