import { useState, useEffect } from 'react'
import styled from 'styled-components'
import GameboardCard from './GameboardCard'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const Gameboard = (props) => {
  const [randomOrder, setRandomOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  const shuffleCards = () => {
    // change numbers inside random order
    let newRandomOrder = randomOrder.map((num, i, arr) => {
      return Math.floor(Math.random() * arr.length)
    })
    setRandomOrder(newRandomOrder)
  }

  useEffect(() => {
    shuffleCards()

    return () => {
      document.removeEventListener('click', shuffleCards)
    }
  }, [])

  return (
    <Main>
      <GameboardCard
        title='card1'
        img=''
        order={randomOrder[0]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card2'
        img=''
        order={randomOrder[1]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card3'
        img=''
        order={randomOrder[2]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card4'
        img=''
        order={randomOrder[3]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card5'
        img=''
        order={randomOrder[4]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card6'
        img=''
        order={randomOrder[5]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card7'
        img=''
        order={randomOrder[6]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card8'
        img=''
        order={randomOrder[7]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
    </Main>
  )
}

export default Gameboard
