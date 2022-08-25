import React from 'react'
import videoBg from '../../assets/video.mp4';
import './background.css'

export default function Background() {
  return (
    <div className='background'>
      <div className="overlay"></div>

      <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}
