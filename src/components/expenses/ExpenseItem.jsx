import Button from "../ui/Button";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <div className={styles["expense-item"]}>
      <h2 className={styles["expense-item__description"]}>
        {props.expense.title}
      </h2>
      <div className={styles["expense-item__price"]}>
        {props.expense.price} KGS
      </div>
      <ExpenseDate date={props.expense.date} />
    </div>
  );
};

export default ExpenseItem;
