const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get Goals" });
});
const postGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "add Goals" });
});

const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

const updateGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

module.exports = { getGoals, updateGoal, deleteGoal, postGoal };
