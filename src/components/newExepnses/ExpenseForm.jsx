import React, {useState} from 'react'
import './ExpenseForm.css'
import Button from '../ui/Button'

const ExpenseForm = ({onGet}) => {

    const [userInputs, setUserInputs] = useState({
        title: '',
        price: '',
        date: ''
    })

const InputChangeHandler = (e) => {
    if (e.target.name === 'title') {
        setUserInputs({
            ...userInputs,
            title: e.target.value
        })
    }else if (e.target.name === 'price'){
         setUserInputs({
            ...userInputs,
            price: e.target.value
        })
    }else if (e.target.name === 'date') {
          setUserInputs({
            ...userInputs,
            date: e.target.value
        })
    }
}



const submitHandler = (e) => {
    e.preventDefault()
    onGet({
       title:userInputs.title,
       price: userInputs.price,
       date: new Date(userInputs.date)
    })
    
}

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input name='title' type="text" onChange={InputChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Price</label>
                    <input name='price' type="number" onChange={InputChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input name='date' type="date" onChange={InputChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <Button>Add Expense</Button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm