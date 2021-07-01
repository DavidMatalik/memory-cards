import styled from 'styled-components'
import { useState } from 'react'

const Card = styled.div`
  order: ${(props) => props.order};
`

const GameboardCard = (props) => {
  const [counter, setCounter] = useState(0)
  const { order, onclickShuffle, title } = props

  const onclickIncrementCounter = () => {
    setCounter(counter + 1)
  }

  const runClickFunctions = () => {
    onclickShuffle()
    onclickIncrementCounter()
  }

  return (
    <Card order={order} onClick={runClickFunctions}>
      {title}
    </Card>
  )
}

export default GameboardCard
