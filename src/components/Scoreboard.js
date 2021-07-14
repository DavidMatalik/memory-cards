import ScoreboardScore from './ScoreboardScore'

const Scoreboard = (props) => {
  const { resetCards, cardClick } = props
  return (
    <div>
      <ScoreboardScore resetCards={resetCards} cardClick={cardClick} />
    </div>
  )
}

export default Scoreboard
