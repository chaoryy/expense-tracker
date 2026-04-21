import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <ExpenseItem key={item.id} expenses={item} />
      ))}
    </div>
  );
};

export default Expenses;
