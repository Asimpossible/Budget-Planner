import { createSlice } from "@reduxjs/toolkit";
import { IContent, IExpense } from "./types";
import { PayloadAction } from "@reduxjs/toolkit/react";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

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
        resetBudget: () => initialState

    }
})

export const { setBudget, addToExpense, calculateSpent, calculateRemaining, resetBudget } = BudgetSlice.actions;
export const reducer = persistReducer(
    {
        key: "Budget",
        storage,
        whitelist: [
            "content",
            "budget",
            "budgetRemaining",
            "spent",
            "expenseTitle",
            "expenseCost"
        ],
    },
    BudgetSlice.reducer
);
export default reducer;