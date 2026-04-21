// import the Card wrapper
import Card from "../ui/Card";
// import the component for a single expense card
import ExpenseItem from "./ExpenseItem";
// import styles 
import styles from "./Expenses.module.css";

// receives the expenses array and renders a card for each item
const Expenses = (props) => {
  return (
    // wrap the whole list in Card to apply the container styling
    <Card className={styles["expenses"]}>
      {/* loop through every expense and create an ExpenseItem for it */}
      {props.expenses.map((el) => {
        // key tells React which item changed so it only rerenders that one
        return <ExpenseItem key={el.id} expense={el} />;
      })}
    </Card>
  );
};

// export so App can render the full list
export default Expenses;
