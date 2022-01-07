const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
dotenv.config();
//connect to mongoDB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongoDB");
  }
);
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);

app.listen(8800, () => {
  console.log("backend server is running");
});
