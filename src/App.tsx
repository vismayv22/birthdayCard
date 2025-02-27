import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BirthdayCard from './components/birthdayCard'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-400 to-yellow-600 gap-8 rounded-2xl shadow-md">
      <img
        src="assets/samosa.png"
        alt="Birthday"
        className="w-100"
      />
      <BirthdayCard />
      <img
        src="assets/samosa.png"
        alt="Birthday"
        className="w-100"
      />
    </div>
  );
}

export default App
