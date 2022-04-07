const Expenses = require("../../schema/taskSchema");

module.exports.getAllExpenses = (req, res) => {
  try {
    Expenses.find().then((result) => {
      res.send({ data: result });
    });
  } catch (e) {
    res.status(500).send({ message: "Internal server error" });
  }
};