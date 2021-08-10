import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Board = styled.div`
  grid-column: 3 / 4;
  justify-self: end;
  font-size: 200%;
  text-shadow: 2px 2px 3px;
  white-space: nowrap;
  @media only screen and (max-width: 750px) {
    grid-column: 1/ 2;
    grid-row: 2 /3;
    justify-self: center;
  }
`

const Scoreboard = (props) => {
  const { resetCards, cardClick } = props
  const [bestScore, setBestScore] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (cardClick) {
      setScore(score + 1)
    }
  }, [cardClick])

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
    setScore(0)
  }, [resetCards])

  return (
    <Board>
      <div>Score: {score} </div>
      <div>Highscore: {bestScore}</div>
    </Board>
  )
}

export default Scoreboard
