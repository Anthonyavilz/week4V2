const express = require("express");
const cors = require("cors");
const {getCompliment, getAllCompliments, createCompliments, deleteCompliment } = require('./controller')

const app = express();

app.use(cors());
app.use(express.json());


app.get("/api/compliment", getCompliment);
app.get('/api/', getAllCompliments);
app.post('/api/', createCompliments);
app.delete('/api/compliments', deleteCompliment);


app.listen(4000, () => console.log("Server running on 4000"));
