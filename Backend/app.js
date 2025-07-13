const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const connectToDb = require('./db/db');
const cookieParser = require('cookie-parser');
const app = express();
const mapRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

connectToDb();
app.use(cors());

app.use(cookieParser());




app.get('/',(req,res)=> {
    res.send('Hello World');
})
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapRoutes);
app.use('/rides',rideRoutes);

module.exports = app;


