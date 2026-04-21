import React from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";
import Card from "../ui/Card";

const NewExpenses = (props) => {
  const getExpenseHandler = (expense) => {
    const expenseWithId = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAdd(expenseWithId);
  };

  return (
    <Card className={styles["new-expense"]}>
      <ExpenseForm onGet={getExpenseHandler} />
    </Card>
  );
};

export default NewExpenses;
