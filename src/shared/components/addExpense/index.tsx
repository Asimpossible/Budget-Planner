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
            <div className="expense mt-14 mb-10">
                <div className="expense__title  text-2xl font-semibold text-palette-5 mb-5"><h2>Add Expense</h2></div>
                <div className="expense__inputs">
                    <form onSubmit={handleOnSubmit} className='flex justify-start items-end gap-7'>
                        <div className="expense__inputs__nameInp flex flex-col gap-1">
                            <label htmlFor="name" className='text-lg font-semibold'>Name:</label>
                            <input type="text" id='name' name='name' value={values.name} onChange={handleOnChange} className='py-1 px-1.5 focus:outline-none rounded-lg' />
                        </div>
                        <div className="expense__inputs__costInp flex flex-col gap-1">
                            <label htmlFor="cost" className='text-lg font-semibold'>Cost:</label>
                            <input type="number" name="cost" id="cost" value={values.cost} onChange={handleOnChange} className='py-1 px-1.5 focus:outline-none rounded-lg' />
                        </div>
                        <button className='addBtn rounded-lg py-1 cursor-pointer active:text-red-500 px-4 bg-teal-600 text-lg text-white font-semibold'>Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Index
