import { useState, useEffect } from 'react'
import styled from 'styled-components'
import GameboardCard from './GameboardCard'
import cat1 from '../images/cat1.jpg'
import cat2 from '../images/cat2.jpg'
import cat3 from '../images/cat3.jpg'
import cat4 from '../images/cat4.jpg'
import cat5 from '../images/cat5.jpg'
import cat6 from '../images/cat6.jpg'
import cat7 from '../images/cat7.jpg'
import cat8 from '../images/cat8.jpg'

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 40px;
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
        img={cat1}
        order={randomOrder[0]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card2'
        img={cat2}
        order={randomOrder[1]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card3'
        img={cat3}
        order={randomOrder[2]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card4'
        img={cat4}
        order={randomOrder[3]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card5'
        img={cat5}
        order={randomOrder[4]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card6'
        img={cat6}
        order={randomOrder[5]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card7'
        img={cat7}
        order={randomOrder[6]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
      <GameboardCard
        title='card8'
        img={cat8}
        order={randomOrder[7]}
        onclickShuffle={shuffleCards}
        afterClickCheckCount={props.checkCount}
        resetCard={props.resetCards}
      />
    </Main>
  )
}

export default Gameboard
