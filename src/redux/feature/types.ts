export interface IExpense {
    name: string,
    cost: number,
    id: number
}

export interface IContent {
    content: IExpense[],
    budget: number | string,
    budgetRemaining: number,
    spent: number,
    expenseTitle: string,
    expenseCost: number,
}

