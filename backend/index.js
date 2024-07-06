require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const key = process.env.MONGODB_URI;

mongoose
  .connect(key)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const BudgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Budget = mongoose.model("Budget", BudgetSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/budget", async (req, res) => {
  const { title, amount } = req.body;
  if (!title || !amount) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const budget = new Budget({ title, amount });
    await budget.save();
    res.status(201).json({ message: "Budget added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/budget", async (req, res) => {
  try {
    const budgets = await Budget.find();
    const currentMonth = new Date().getMonth();
    const totalForMonth = budgets.reduce((total, budget) => {
      const budgetMonth = new Date(budget.date).getMonth();
      if (budgetMonth === currentMonth) {
        total += budget.amount;
      }
      return total;
    }, 0);
    res.status(200).json({ budgets, totalForMonth });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
