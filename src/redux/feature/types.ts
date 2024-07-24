
export interface IExpense {
    name: string,
    cost: string,
    id: string
}

export interface IContent {
    content: IExpense[],
    budget: number,
    budgetRemaining: number,
    spent: number,
    expenseTitle: string,
    expenseCost: string,
    searchQuery: string,
    expenseId: string
}