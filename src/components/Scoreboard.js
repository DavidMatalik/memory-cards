import { useState, useEffect } from 'react'

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
    <div>
      <div>Score: {score} </div>
      <div>Best score: {bestScore}</div>
    </div>
  )
}

export default Scoreboard
