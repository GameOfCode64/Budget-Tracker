import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { useState } from "react";
import axios from "axios";

const Card = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await axios.post("http://localhost:5000/budget", {
        title,
        amount,
      });
      alert("Amount Added Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-20 py-8">
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Create One</Button>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-xl">
          <DialogHeader>
            <DialogTitle className="font-bold text-indigo-700">
              Add to Expenses List
            </DialogTitle>
          </DialogHeader>
          <form className="w-full flex flex-col mt-4" onSubmit={handleSubmit}>
            <label className="mb-2 text-[17px] font-semibold">Title</label>
            <input
              className="py-2 border-[2px] rounded-md px-2 text-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="mb-2 text-[17px] font-semibold">Amount</label>
            <input
              className="py-2 border-[2px] rounded-md px-2 text-lg"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-3 mt-4 text-white font-semibold rounded-md w-full bg-indigo-700"
            >
              Add to Expenses
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Card;
