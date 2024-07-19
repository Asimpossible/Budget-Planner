import { createSlice } from "@reduxjs/toolkit";
import { IContent, IExpense } from "./types";
import { PayloadAction } from "@reduxjs/toolkit/react";

const initialState = {
    content: [],
    budget: 0,
    budgetRemaining: 0,
    spent: 0,
    expenseTitle: '',
    expenseCost: 0
}

const BudgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addToExpense: (state: IContent, action: PayloadAction<IExpense>) => {

            state.content.push(action.payload)
            state.expenseTitle = action.payload.name
            state.expenseCost = action.payload.cost
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
        resetBudget: () => initialState,

        deleteItem: (state: IContent, action: PayloadAction<number>) => {
            state.content = state.content.filter(item => item.id != action.payload)
        },
        editItem: (state: IContent, action: PayloadAction<IExpense>) => {
            const index = state.content.findIndex(budget => budget.id === action.payload.id)
            if (index != -1) {
                state.content[index] = action.payload
            }
        }


    }
})

export const { setBudget, addToExpense, calculateSpent, calculateRemaining, resetBudget, deleteItem, editItem } = BudgetSlice.actions;
export default BudgetSlice.reducer;