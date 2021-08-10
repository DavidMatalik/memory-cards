import Header from './components/Header'
import Gameboard from './components/Gameboard'
import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
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
    padding: 20px;
  }
`

const Description = styled.p`
  text-align: center;
  font-size: 200%;
  text-shadow: 2px 2px 6px;
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
      <Header resetCards={resetCards} cardClick={cardClick} />
      <Description>
        Remember on which cat you already clicked. And click on a new cat. If
        you click on a cat you already clicked on, the game will restart.
      </Description>
      <Gameboard checkCount={checkCount} resetCards={resetCards} />
    </div>
  )
}

export default App
