import { useState } from 'react'
import HomecomingInvite from './HomecomingInvite'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomecomingInvite />
    </div>
  )
}

export default App
