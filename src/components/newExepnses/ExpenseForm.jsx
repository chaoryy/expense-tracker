import React, { useState } from "react";
// import styles
import styles from "./ExpenseForm.module.css";
// import the reusable Button component
import Button from "../ui/Button";

// form component for entering a new expense
const ExpenseForm = ({ onGet }) => {
  //onGet — callback called with the filled-in data when the user submits

  // store all three fields in a single state object
  const [userInputs, setUserInputs] = useState({
    title: "",
    price: "",
    date: "",
  });

  // one handler for all inputs 
  // we check the name attribute to know which field changed
  const InputChangeHandler = (e) => {
    if (e.target.name === "title") {
      // update only title
      setUserInputs({
        ...userInputs,
        title: e.target.value,
      });
    } else if (e.target.name === "price") {
      // update only price
      setUserInputs({
        ...userInputs,
        price: e.target.value,
      });
    } else if (e.target.name === "date") {
      // update only date
      setUserInputs({
        ...userInputs,
        date: e.target.value,
      });
    }
  };

  // fires when the user clicks
  const submitHandler = (e) => {
    // prevent the default form behaviour that would reload the page
    e.preventDefault();
    // send the data up to NewExpenses via the onGet prop
    // convert the date string from the input into a real Date object
    onGet({
      title: userInputs.title,
      price: userInputs.price,
      date: new Date(userInputs.date),
    });
  };

  return (
    // onSubmit triggers submitHandler when any button inside the form is clicked
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense__controls"]}>
        {/* text field for the expense title */}
        <div className={styles["new-expense__control"]}>
          <label>Title</label>
          <input name="title" type="text" onChange={InputChangeHandler} />
        </div>
        {/* number field so the user cant accidentally type letters */}
        <div className={styles["new-expense__control"]}>
          <label>Price</label>
          <input name="price" type="number" onChange={InputChangeHandler} />
        </div>
        {/* date picker*/}
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input name="date" type="date" onChange={InputChangeHandler} />
        </div>
        {/* submit button */}
        <div className={styles["new-expense__actions"]}>
          <Button>Add Expense</Button>
        </div>
      </div>
    </form>
  );
};

// export so NewExpenses can render this form
export default ExpenseForm;
