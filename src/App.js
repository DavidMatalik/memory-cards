import Gameboard from './components/Gameboard'
import { useState } from 'react'

function App() {
  const [resetCards, setResetCards] = useState(false)

  const checkCount = (counter) => {
    if (counter === 2) {
      setResetCards(!resetCards)
      // reset Scoreboard (currentscore and bestscore)
    }
  }

  return <Gameboard checkCount={checkCount} resetCards={resetCards} />
}

export default App
