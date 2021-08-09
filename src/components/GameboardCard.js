import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: ${(props) => props.order};
  width: 250px;
  padding: 10px;
  background: #001e6cba;
  border-radius: 20px;
  box-shadow: 5px 5px #001e6c54;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`

const Cardimage = styled.img`
  width: 250px;
  border-radius: 20px;
`

const Description = styled.p`
  margin: 5px 10px 0 10px;
  font-size: 150%;
  color: white;
  text-shadow: 1px 1px 2px #ffaa4c;
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
      <Cardimage alt='cat' src={img} />
      <Description>{title}</Description>
    </Card>
  )
}

export default GameboardCard
