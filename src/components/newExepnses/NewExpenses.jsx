import React from "react";
// import the form where the user fills in expense data
import ExpenseForm from "./ExpenseForm";
// import styles for the new-expense section wrapper
import styles from "./NewExpense.module.css";
// import Card
import Card from "../ui/Card";

// middleman component between the form and App
// gets the raw data from the form, attaches an id, then passes it up to App
const NewExpenses = (props) => {
  // called by ExpenseForm after the user submits receives the new expense
  const getExpenseHandler = (expense) => {
    // generate unique id with Math.random and convert it to a string
    const expenseWithId = {
      ...expense,
      id: Math.random().toString(),
    };
    // send the complete expense object up to App 
    props.onAdd(expenseWithId);
  };

  return (
    // wrap the form in Card to give it the same styled container look
    <Card className={styles["new-expense"]}>
      {/* pass our handler down so the form can return the filled-in data */}
      <ExpenseForm onGet={getExpenseHandler} />
    </Card>
  );
};

// export so App can render this component
export default NewExpenses;
