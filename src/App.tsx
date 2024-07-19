import React from "react"

const Home = React.lazy(() => import('@/pages/Home'))
function App() {

  return (
    <>
      <React.Suspense>
        <Home />
      </React.Suspense>
    </>
  )
}

export default App
