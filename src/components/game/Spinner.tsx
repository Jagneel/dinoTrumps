import React, { Component, useState } from 'react'
import WheelComponent from './WheelComponent'
import './spinner.css';

export default function Spinner (props: spinnerProps) {

// const [spinner, setSpinner] = useState(true);
const showCards = props.showCards;

  const segments = [
    'Height',
    'Age',
    'Length',
    'Intelligence',
    'Weight',
    'Killer Rating',
  ]
  const segColors = [
    '#e23123',
    '#675538',
    '#34495e',
    '#f39c12',
    '#180806',
    '#f0b83e'
  ]
  const onFinished = (winner: string) => {
    setTimeout(() => props.setShowSpinner(), 2000);
    setTimeout(() => showCards(), 2000);
    props.setTrumpTrait(winner);
  }

  if(props.showSpinner){
    return (
          <div className='spin-container'>{props.showSpinner && <div className='spinner'>
            <h2>
                Spin to fight!
            </h2>
            <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment='won 10'
            onFinished={(winner: string) => onFinished(winner)}
            primaryColor='black'
            contrastColor='white'
            buttonText='Spin'
            isOnlyOnce={false}
            size={190}
            upDuration={Math.floor(Math.random() * 200) + 1}
            downDuration={Math.floor(Math.random() * 500) + 1}
            fontFamily='Impact'
            />
        </div>}
        </div>
      )      
  } else {
    return (
      <></>
    )
  }


}

interface spinnerProps {
  showCards: () => void;
  setTrumpTrait: (winner: string) => void;
  setShowSpinner: () => void;
  showSpinner: boolean
}