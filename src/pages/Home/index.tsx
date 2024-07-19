import { AddExpense, BudgetPlanner, Expenses } from '@/shared'
import { Header } from '@/shared/layout'
import React from 'react'

const Index: React.FC = () => {
    return (
        <div className='w-11/12 m-auto'>
            <Header />
            <BudgetPlanner />
            <Expenses />
            <AddExpense />
        </div>
    )
}

export default Index
