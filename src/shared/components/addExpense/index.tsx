import { useAppDispatch } from '@/redux/store'
import './addExpense.scss'
import { IExpense } from '@/redux/feature/types'
import React, { SyntheticEvent } from 'react'
import { addToExpense, calculateRemaining, calculateSpent } from '@/redux/feature/budgetSlice'

const Index: React.FC = () => {
    const dispatch = useAppDispatch()

    const [values, setValues] = React.useState<IExpense>({
        name: '',
        cost: 0
    })

    function handleOnSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault()
        if (values.name && values.cost != 0) {
            dispatch(addToExpense(values))
            setValues({ name: '', cost: 0 })
            dispatch(calculateSpent(values.cost))
            dispatch(calculateRemaining())
        }
        else {
            alert("Expense is not entered...")
        }
    }

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setValues({ ...values, [e.target.name]: e.target.value })

    }

    return (
        <>
            <div className="expense">
                <div className="expense__title"><h2>Add Expense</h2></div>
                <div className="expense__inputs">
                    <form onSubmit={handleOnSubmit}>
                        <div className="expense__inputs__nameInp">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id='name' name='name' value={values.name} onChange={handleOnChange} />
                        </div>
                        <div className="expense__inputs__costInp">
                            <label htmlFor="cost">Cost:</label>
                            <input type="number" name="cost" id="cost" value={values.cost} onChange={handleOnChange} />
                        </div>
                        <button className='addBtn'>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Index
