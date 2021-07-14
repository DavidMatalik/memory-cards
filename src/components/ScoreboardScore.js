import { useState, useEffect } from 'react'

const ScoreboardScore = (props) => {
  const { resetCards, cardClick } = props
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (cardClick) {
      setScore(score + 1)
    }
  }, [cardClick])

  useEffect(() => {
    setScore(0)
  }, [resetCards])

  return <div>{score}</div>
}

export default ScoreboardScore
