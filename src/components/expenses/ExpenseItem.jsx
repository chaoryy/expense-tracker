// import the reusable Button component from the ui folder
import Button from "../ui/Button";
// import the component that formats and displays the date
import ExpenseDate from "./ExpenseDate";
// import styles 
import styles from "./ExpenseItem.module.css";

// renders one expense card: title, price, and date
const ExpenseItem = (props) => {
  return (
    // wrapper div for the whole card
    <div className={styles["expense-item"]}>
      {/* expense title coming from the expense object passed with props */}
      <h2 className={styles["expense-item__description"]}>
        {props.expense.title}
      </h2>
      {/* price in KGS pulled from the same expense object */}
      <div className={styles["expense-item__price"]}>
        {props.expense.price} KGS
      </div>
      {/* pass the date down to ExpenseDate for nicely formatted display */}
      <ExpenseDate date={props.expense.date} />
    </div>
  );
};

// export so Expenses can render as many cards as needed
export default ExpenseItem;
