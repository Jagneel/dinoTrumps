import React from 'react'
import { useNavigate } from 'react-router-dom'
import Background from '../background/Background'
import Button from '../utils/Button'
import './home.css'

export default function Home() {
    const navigate = useNavigate();
   
    const navigateToGame = () => {
        navigate('/game')
    }

    const navigateToHow = () => {
        navigate('/howTo')
    }
    

  return (
    <div>
        <Background/>
        <div className="main-content">
            <h2>Welcome to</h2>
            <h1>DINO TRUMPS!</h1>
            <br></br>
            <h3>How well do you know your dinos?</h3>
            <br></br> 
            <Button className="home-btn" type="button" onClick={navigateToGame} children="Play Game"/>
            <Button className="home-btn" type="submit" onClick={navigateToHow} children="How To Play"/>
        </div>
        <br></br>
    </div>
  )
}
