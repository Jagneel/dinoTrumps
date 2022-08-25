import React from 'react'
import './score.css'

export default function Score(props: scoreProps) {
  return (
    <div className="score">
        <div className='score-container'>
            <h3>{props.user}: {props.score}</h3>
        </div>
    </div>
  )
}



interface scoreProps {
    user: string;
    score: number;
}