const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//get a single workouts
router.get("/:id", getWorkout);

//Post a new workouts
router.post("/", createWorkout);

//DELETE
router.delete("/:id", deleteWorkout);

//UPDATE
router.patch("/:id", updateWorkout);

module.exports = router;
