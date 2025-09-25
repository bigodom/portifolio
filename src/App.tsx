import { useState } from 'react'
import WorkCard from './components/WorkCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center'>
        <WorkCard />
      </div>
      <h1>Vite + React</h1>
      <div className="card text-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
