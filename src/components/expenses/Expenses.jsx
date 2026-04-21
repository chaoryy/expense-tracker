import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import styles from "./Expenses.module.css";

const Expenses = (props) => {
  return (
    <Card className={styles["expenses"]}>
      {props.expenses.map((el) => {
        return <ExpenseItem key={el.id} expense={el} />;
      })}
    </Card>
  );
};

export default Expenses;
