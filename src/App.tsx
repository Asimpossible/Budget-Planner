import { AddExpense, Expenses, BudgetPlanner } from "./shared"
import { Header } from "./shared/layout"

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <BudgetPlanner />
        <Expenses />
        <AddExpense />
      </div>
    </>
  )
}

export default App
