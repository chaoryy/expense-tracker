import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {

    return <Card className="expenses">
        {
            props.expenses.map(el => {
                return (
                    <ExpenseItem key={el.id} expense={el} />
                )
            })
        }
    </Card>


}

export default Expenses