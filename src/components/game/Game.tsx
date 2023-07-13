import React, { useState } from 'react'
import Background from '../background/Background'
import Card from './Card'
import Spinner from './Spinner'
import './game.css'
import Score from './Score'
import Winner from './Winner'
import Loser from './Loser'
import Draw from './Draw'
import YouLose from './YouLose'
import YouWin from './YouWin'
import { useNavigate } from 'react-router-dom'
import Button from '../utils/Button'


export default function Game(props: gameProps) {
  const [shown, setShown] = useState(false);
  const [trump, setTrump] = useState("");
  const [score, setScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [youWin, setYouWin] = useState(false);
  const [youLose, setYouLose] = useState(false);
  const [showWinner, setShowWinner] = useState(false)
  const [showLoser, setShowLoser] = useState(false)
  const [showDraw, setShowDraw] = useState(false)
  const [showSpinner, setShowSpinner] = useState(true);

  const showCards = () => setShown(!shown)


  const setTrumpTrait = (winner: string) => {
    setTrump(winner)
  }

  const handleSpinner = () => setShowSpinner(!showSpinner);


  let clickCount = 0

  const handleClickOne = () => {
    setShown(!shown)
    if (score === 10) {
      setScore(0)
      setYouWin(!youWin)
      setShown(!shown)
    } else if (cpuScore === 10) {
      setScore(0)
      setYouLose(!youLose)
      setShown(!shown)
    } else if (clickCount === 0) {

      if (cardOneKicker > cardTwoKicker) {
        setScore(score + 1);
        setShowWinner(!showWinner);
      } else if (cardOneKicker === cardTwoKicker) {
        setShowDraw(!showDraw)
      } else {
        setCpuScore(cpuScore + 1);
        setShowLoser(!showLoser);
      }
      setTimeout(() => setShowWinner(false), 2000);
      setTimeout(() => setShowLoser(false), 2000);
      setTimeout(() => setShowDraw(false), 2000);

      setTimeout(() => setShown(!shown), 2000);
      setTimeout(() => setShowSpinner(!showSpinner), 2100);


      clickCount++
      setTimeout(() => clickCount = 0, 2000);
    }
  }
  const handleClickTwo = () => {
    setShown(!shown)
    if (score === 10) {
      setScore(0)
      setYouWin(!youWin)
      setShown(!shown)
    } else if (cpuScore === 10) {
      setScore(0)
      setYouLose(!youLose)
      setShown(!shown)
    } else if (clickCount === 0) {

      if (cardOneKicker < cardTwoKicker) {
        setScore(score + 1);
        setShowWinner(!showWinner);
      } else if (cardOneKicker === cardTwoKicker) {
        setShowDraw(!showDraw)
      } else {
        setCpuScore(cpuScore + 1);
        setShowLoser(!showLoser);
      }
      setTimeout(() => setShowWinner(false), 2000);
      setTimeout(() => setShowLoser(false), 2000);
      setTimeout(() => setShowDraw(false), 2000);

      setTimeout(() => setShown(!shown), 2000);
      setTimeout(() => setShowSpinner(!showSpinner), 2100);

      clickCount++
      setTimeout(() => clickCount = 0, 2000);
    }
  }


  function getRandomCard(arr: string[]) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }

  let cardOne = getRandomCard(props.data)
  let cardTwo = getRandomCard(props.data)

  if (cardOne === cardTwo) {
    cardOne = getRandomCard(props.data)
  }

  const cardOneNew = Object.fromEntries(
    Object.entries(cardOne).map(([k, v]) => [k.toLowerCase(), v])
  );

  const cardTwoNew = Object.fromEntries(
    Object.entries(cardTwo).map(([k, v]) => [k.toLowerCase(), v])
  );

  const trumpToLower = trump.toLowerCase();

  const cardOneKicker = parseInt(cardOneNew[trumpToLower])
  const cardTwoKicker = parseInt(cardTwoNew[trumpToLower])
  const cardOneIndividual = cardOneNew.individual
  const cardOneImage = cardOneNew.image
  const cardTwoIndividual = cardTwoNew.individual
  const cardTwoImage = cardTwoNew.image

  console.log(cardOneNew.individual)



  const navigate = useNavigate();

  const navigateToGame = () => {
    navigate('/game')
    window.location.reload();
  }

  return (
    <div>
      <div className="show-score">
        <Score user='You' score={score} />
        <Score user='CPU' score={cpuScore} />
      </div>
      <Spinner showCards={showCards} setTrumpTrait={setTrumpTrait} setShowSpinner={handleSpinner} showSpinner={showSpinner} />
      {shown && <div className="show-card">
        <h1>{trump}</h1>
        <Card individual={cardOneIndividual} image={cardOneImage} shown={shown} onClick={handleClickOne} />
        <h2>VS</h2>
        <Card individual={cardTwoIndividual} image={cardTwoImage} shown={shown} onClick={handleClickTwo} />
      </div>}
      {showWinner && <div className="show-win-lose">
        <Winner />
      </div>
      }
      {showLoser && <div className='show-win-lose'>
        <Loser />
      </div>
      }
      {showDraw && <div className='show-win-lose'>
        <Draw />
      </div>
      }
      <div className="win-or-lost">
        {youWin && <div className="win">
          <YouWin />
          <Button className="home-btn" type="button" onClick={navigateToGame} children="Play Again" />
        </div>}
        {youLose && <div className="lost">
          <YouLose />
          <Button className="home-btn" type="button" onClick={navigateToGame} children="Play Again" />
        </div>}
      </div>

    </div>
  )

}

interface gameProps {
  data: string[]
}

