import { createSlice } from "@reduxjs/toolkit";
import { IContent, IExpense } from "./types";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { v4 as uuid } from 'uuid'

const initialState = {
    content: [],
    budget: 0,
    budgetRemaining: 0,
    spent: 0,
    expenseTitle: '',
    expenseCost: '',
    searchQuery: '',
    expenseId: ''
}

const BudgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addToExpense: (state: IContent, action: PayloadAction<IExpense>) => {
            state.content.push(action.payload)
            state.expenseTitle = action.payload.name
            state.expenseCost = action.payload.cost
            state.expenseId = action.payload.id = uuid()
        },
        setBudget: (state: IContent, action: PayloadAction<number>) => {
            state.budget = action.payload;
        },
        calculateSpent: (state: IContent, action: PayloadAction<number>) => {
            state.spent += Number(action.payload)
        },
        calculateRemaining: (state: IContent) => {
            state.budgetRemaining = state.budget as number - state.spent
        },
        deleteItem: (state: IContent, action: PayloadAction<string>) => {
            const deleteExpense = state.content.find(item => item.id === action.payload)
            console.log('action payload is: ', action.payload)

            if (deleteExpense) {
                state.content = state.content.filter(item => item.id !== deleteExpense.id)
                state.spent -= Number(deleteExpense.cost)
                state.budgetRemaining += Number(deleteExpense.cost)
            }

        },
        setSearchQuery: (state: IContent, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        }
    }
})

export const { setBudget, addToExpense, calculateSpent, calculateRemaining, deleteItem, setSearchQuery } = BudgetSlice.actions;
export default BudgetSlice.reducer;