import { useState } from 'react'
import { Navbar, Hero } from './components'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" bg-primary w-full ">
      <div className=' sm:px-16 px-6 flex justify-center items-center'>
        <div className=' xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className=' bg-primary flex justify-center items-center'>
        <div className=' max-w-[1280px]'>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
