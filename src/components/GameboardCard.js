import styled from 'styled-components'

const Card = styled.div`
  order: ${(props) => props.order};
`

const GameboardCard = (props) => {
  const { order, onclickShuffle, title } = props

  return (
    <Card order={order} onClick={onclickShuffle}>
      {title}
    </Card>
  )
}

export default GameboardCard
