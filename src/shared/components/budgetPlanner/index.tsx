import React, { useRef, useState } from 'react'
import './budgetPlanner.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { calculateRemaining, resetBudget, setBudget } from '@/redux/feature/budgetSlice'

const Index: React.FC = () => {
    const [Edit, setEdit] = useState('Edit')
    const inputRef = useRef<HTMLInputElement>(null)
    const spent = useAppSelector(state => state.spent)
    const budgetRemaining = useAppSelector(state => state.budgetRemaining)
    const budget = useAppSelector(state => state.budget)
    const dispatch = useAppDispatch()
    const [budgetValue, setBudgetValue] = useState(budget)




    const handleEditBudget: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (inputRef.current) {

            dispatch(setBudget(Number(inputRef.current?.value)))
            dispatch(calculateRemaining())

            if (inputRef.current.hasAttribute('readonly')) {
                inputRef.current.focus();
                inputRef.current.removeAttribute('readonly');
                setEdit("Submit")
            }
            else {
                inputRef.current.setAttribute('readonly', 'true')
                setEdit('Edit')
            }

        }
    }

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setBudgetValue(Number(e.target.value))
    }

    function handleReset() {
        dispatch(resetBudget());
    }

    return (
        <>
            <div className="budget__title"><h1>My Budget Planner</h1></div>
            <div className="wrapper__budget">
                <div className="budgetCard">
                    <label htmlFor="budget" className='label'>Budget: $</label>
                    <input type="text" id='budget' ref={inputRef} value={budgetValue} onChange={handleOnChange} />
                    <button onClick={handleEditBudget}>{Edit}</button>
                </div>
                <div className="remainingCard">
                    Remaining: {budgetRemaining}$
                </div>
                <div className="spentSoFarCard">
                    Spent so far : {spent}$
                </div>
                <div className="resetDiv">
                    <button className='resetBtn' onClick={handleReset}>Reset Planner</button>
                </div>
            </div>
        </>
    )
}

export default Index
