import React from "react";
// import the base card styles: shadow, border-radius, background
import styles from "./Card.module.css";

// reusable wrapper that gives any content a card appearance
// className — extra class passed from outside (e.g. "expenses" or "new-expense")
// children — whatever is nested inside <Card>...</Card>
const Card = ({ children, className }) => {
  // merge the external class with the base card class using a template string
  return <div className={`${className} ${styles.card}`}>{children}</div>;
};

// export so Expenses and NewExpenses can wrap their content in a card
export default Card;
