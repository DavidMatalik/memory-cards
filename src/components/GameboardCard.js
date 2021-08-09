import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Card = styled.div`
  order: ${(props) => props.order};
  width: 300px;
  height: 300px;
`

const GameboardCard = (props) => {
  const [counter, setCounter] = useState(0)
  const { order, onclickShuffle, afterClickCheckCount, title, resetCard, img } =
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
      <img alt='cat' src={img} />
      {title}
    </Card>
  )
}

export default GameboardCard
