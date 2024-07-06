import { useState, useEffect } from "react";
import axios from "axios";

const TotalMonthlyExpense = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await axios.get("http://localhost:5000/budget");
        setTotal(response.data.totalForMonth);
      } catch (error) {
        console.error("Error fetching total monthly expense:", error);
      }
    };

    fetchTotal();
  }, []);

  return (
    <div className=" mt-12 px-14">
      <h2 className="text-xl font-bold text-indigo-700">
        Total Monthly Expense
      </h2>
      <p className="text-lg font-semibold text-emerald-700">Total: ₹{total}</p>
    </div>
  );
};

export default TotalMonthlyExpense;
