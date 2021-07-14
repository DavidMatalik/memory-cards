import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Card = styled.div`
  order: ${(props) => props.order};
`

const GameboardCard = (props) => {
  const [counter, setCounter] = useState(0)
  const { order, onclickShuffle, afterClickCheckCount, title, resetCard } =
    props

  useEffect(() => {
    setCounter(0)
  }, [resetCard])

  useEffect(() => {
    if (counter) {
      afterClickCheckCount(counter)
    }
  }, [counter])

  const onclickIncrementCounter = () => {
    setCounter(counter + 1)
  }

  const runClickFunctions = () => {
    onclickIncrementCounter()
    onclickShuffle()
  }

  return (
    <Card order={order} onClick={runClickFunctions}>
      {title}
    </Card>
  )
}

export default GameboardCard
