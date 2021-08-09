import Gameboard from './components/Gameboard'
import Scoreboard from './components/Scoreboard'
import { useState } from 'react'

function App() {
  const [resetCards, setResetCards] = useState(false)
  const [cardClick, setCardClick] = useState(0)

  const checkCount = (counter) => {
    setCardClick(cardClick + 1)
    if (counter === 2) {
      setResetCards(!resetCards)
    }
  }

  return (
    <div>
      <Gameboard checkCount={checkCount} resetCards={resetCards} />
      <Scoreboard resetCards={resetCards} cardClick={cardClick} />
    </div>
  )
}

export default App
