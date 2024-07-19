import React, { useRef, useState } from 'react'
import './budgetPlanner.scss'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { calculateRemaining, setBudget } from '@/redux/feature/budgetSlice'

const Index: React.FC = () => {
    const [Edit, setEdit] = useState('Edit')
    const inputRef = useRef<HTMLInputElement>(null)
    const spent = useAppSelector(state => state.content.spent)
    const budgetRemaining = useAppSelector(state => state.content.budgetRemaining)
    const budget = useAppSelector(state => state.content.budget)
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

    return (
        <>
            <div className="wrapper__budget flex justify-between items-center my-8 gap-12">
                <div className="budgetCard font-bold bg-slate-400 text-cyan-950 w-1/4 h-20 rounded-xl flex justify-around items-center">
                    <label htmlFor="budget" className='label w-18 text-lg'>Budget ($):</label>
                    <input type="text" id='budget' ref={inputRef} value={budgetValue} onChange={handleOnChange} className='bg-slate-500 text-white font-thin w-14 rounded-md p-1 focus:outline-none' />
                    <button onClick={handleEditBudget} className='font-semibold hover:transition-all hover:shadow-2xl py-2 px-3 rounded-lg bg-gray-800 text-gray-400 hover:text-white'>{Edit}</button>

                </div>
                <div className="remainingCard text-sky-950 text-lg font-semibold bg-palette-1 w-1/4 h-20 rounded-xl flex justify-around items-center">
                    Remaining: {budgetRemaining}$
                </div>
                <div className="spentSoFarCard text-teal-950 text-lg font-semibold bg-palette-2 w-1/4 h-20 rounded-xl flex justify-around items-center">
                    Spent so far : {spent}$
                </div>
            </div>
        </>
    )
}

export default Index
