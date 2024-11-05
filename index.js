import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

//consts
const API_URL = 'https://buddha-api.com/api/today?by=buddha';

//middleware functions
const isDay = () => {
    return (7 >= new Date().getHours() >= 20) ? true : false  
};

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/',async (req, res) => {
    const result = await axios.get(API_URL);
    res.render('index.ejs', {data: result.data, time: {isDay: isDay()}})
});

app.listen(port, ()=> {
    console.log(`Server is UP on port ${port}`);
});