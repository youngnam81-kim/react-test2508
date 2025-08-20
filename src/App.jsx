import { useState } from 'react'
import './App.css'
import Top from './components/layout/Top'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Top></Top>
    </>
  )
}

export default App
