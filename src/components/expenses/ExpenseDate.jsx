import React from "react";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const expenseDate = props.date;
  const year = expenseDate.getFullYear();
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__day"]}>{day}</div>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
