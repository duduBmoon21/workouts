require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutsRoutes = require("./routes/workouts");

//express app
const app = express();

//MIddleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes to test Api
// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
// });

//routes
app.use("/api/workouts", workoutsRoutes);

//connect db
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
