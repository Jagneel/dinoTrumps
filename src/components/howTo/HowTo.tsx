import React from 'react'
import { useNavigate } from 'react-router-dom';
import Background from '../background/Background'
import Button from '../utils/Button'
import './howTo.css'

export default function HowTo() {

  const navigate = useNavigate();

    function navigateToGame(){
        navigate('/game')
    }

  return (
    <>
      <Background/>
      <div className='instructions' >
        <h1>How To Play</h1>
        <br></br>
        <p>Spin the wheel to get the trump</p>
        <p>You will be shown two dinosaurs</p>
        <p>Guess which dinosaur has the trunm stat for the round's trump</p>
        <p>If you guess right you get a point!</p>
        <p>If not the computer gets the point</p>
        <p>First to 10 wins</p>
      <Button className="home-btn" type="submit" onClick={navigateToGame} children="Play Game"/>
      </div> 
    </>
  )
}
