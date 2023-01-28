import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" w-full h-screen bg-gray-200">
      <Navbar />
    </div>
  )
}

export default App
