import ExpenseDate from "./ExpenseDate";
import "./ui/ExpenceItem.css";

const ExpenseItem = (props) => {
  const demoFn = () => {
    alert("Button");
  };

  return (
    <div className="expense-item">
      <h2 className="expense-item__description">{props.expenses.title}</h2>
      <div className="expense-item__price">{props.expenses.price}</div>
      <ExpenseDate date={props.expenses.date} />
    </div>
  );
};

export default ExpenseItem;
