import React from "react";
// import styles
import styles from "./ExpenseDate.module.css";

// receives a Date object via props and splits it into three visible parts
const ExpenseDate = (props) => {
  // pull the Date object out of props
  const expenseDate = props.date;
  // extract the 4-digit year
  const year = expenseDate.getFullYear();
  // extract the full month name in English
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  // extract the 2-digit day
  const day = expenseDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    // three separate blocks for day, month and year
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__day"]}>{day}</div>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
    </div>
  );
};

// export so ExpenseItem can use this component
export default ExpenseDate;
