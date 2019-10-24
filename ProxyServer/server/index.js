const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT;
port = null || port === '' ? port = 3030 : port;

app.use(express.urlencoded({ extended: true }));
//.json data
app.use(express.json());
app.use(cors);

app.use(express.static('./public'));

app.listen( port, () => console.log(Date(), `Listening on: ${port}`));