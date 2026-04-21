
import Button from '../ui/Button'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    


  return (
    <div className='expense-item'>
        <h2 className='expense-item__description'>{props.expense.title}</h2>
        <div className='expense-item__price'>{props.expense.price} KGS</div>
        <ExpenseDate date={props.expense.date}/>
    </div>
  )
}

export default ExpenseItem

