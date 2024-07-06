import "./App.css";
import AllBudgets from "./components/AllBudgets";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import TotalMonthlyExpense from "./components/TotalMonthlyExpense";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Navbar />
        <div className="flex items-center justify-between">
          <h1 className="mt-8 px-20 font-bold text-indigo-700 text-3xl">
            Track Your Expenses
          </h1>
          <TotalMonthlyExpense />
        </div>
        <Card />
        <AllBudgets />
      </div>
    </>
  );
}

export default App;
