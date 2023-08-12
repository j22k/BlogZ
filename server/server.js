const express = require('express');
var db = require('./config/connection');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const app = express();
const userRouter = require('./routes/user')
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Middlewares, routes, etc. go here

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
db.connectToDatabase();
app.use(cors({
    origin: 'http://localhost:3000',
  }));
app.use('/user',userRouter);

