import Scoreboard from './Scoreboard'
import styled from 'styled-components'

const HeaderTag = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  column-gap: 50px;
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`
const Heading = styled.h1`
  grid-column: 2 / 3;
  font-size: 400%;
  text-shadow: 3px 3px 8px;
  white-space: nowrap;
  @media only screen and (max-width: 750px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const Header = (props) => {
  const { resetCards, cardClick } = props
  return (
    <HeaderTag>
      <Heading>Memory Training</Heading>
      <Scoreboard resetCards={resetCards} cardClick={cardClick} />
    </HeaderTag>
  )
}

export default Header
