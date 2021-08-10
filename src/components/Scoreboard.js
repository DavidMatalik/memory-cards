import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Board = styled.div`
  font-size: 200%;
  text-align: right;
  margin: 20px;
  text-shadow: 2px 2px 3px;
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
