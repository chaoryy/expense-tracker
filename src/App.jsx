// pull useState from React so our app can remember and update data
import { useState } from 'react';
// import styles 
import styles from "./App.module.css";
// import the component that renders the list of expenses
import Expenses from './components/expenses/Expenses';
// import the component with the form for adding a new expense
import NewExpenses from './components/newExepnses/NewExpenses';

// test data so the list isnt empty 
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Cola",
    price: 100,
    date: new Date(2025, 1, 12),
  },
  {
    id: 2,
    title: "Carpet",
    price: 2500,
    date: new Date(2026, 10, 9),
  },
  {
    id: 3,
    title: "Sofa",
    price: 10330,
    date: new Date(2024, 3, 6),
  },
]

function App() {
  // expenses holds the current list, setExpenses is the function to update it
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // called when the user submits the form receives the new expense object
  const addExpenseHandler = (expense) => {
    // place the new expense at the beginning, keep the rest with spread
    return setExpenses([expense, ...expenses])
  }

  return (
    <div className={styles.App}>
      {/* pass addExpenseHandler down so NewExpenses can send us new data */}
      <NewExpenses onAdd={addExpenseHandler}/>
      {/* pass the full expenses array down so Expenses can render each item */}
      <Expenses expenses={expenses}/>
    </div>
  );
}

// export the root component so it can be rendered in index.js
export default App;
