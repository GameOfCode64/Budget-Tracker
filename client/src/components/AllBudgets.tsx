import { useState, useEffect } from "react";
import axios from "axios";

interface BudgetsProps {
  _id: string;
  title: string;
  amount: string;
}
const AllBudgets = () => {
  const [budgets, setBudgets] = useState<BudgetsProps[]>([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/budget");
        setBudgets(response.data.budgets);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      }
    };

    fetchBudgets();
  }, []);

  return (
    <div className="px-20 py-8">
      <h2 className="text-xl font-bold text-indigo-700">All Budgets List</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget._id} className="my-2">
            <span className="font-semibold text-rose-500">{budget.title}:</span>{" "}
            <span className="text-emerald-700 font-bold">
              {" "}
              ₹{budget.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBudgets;
