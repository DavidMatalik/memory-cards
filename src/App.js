import Gameboard from './components/Gameboard'
import Scoreboard from './components/Scoreboard'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import font from './fonts/DelicateSansBold.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DelicateSans;
    src: url('${font}'); 
  }

  * {
    font-family: DelicateSans;
  }

  body {
    background: #FFAA4C;
  }
`

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
      <GlobalStyle />
      <Scoreboard resetCards={resetCards} cardClick={cardClick} />
      <Gameboard checkCount={checkCount} resetCards={resetCards} />
    </div>
  )
}

export default App
