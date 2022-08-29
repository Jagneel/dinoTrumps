import './card.css';
import './hover.css'

export default function Card(props: cardProps) {
  
  if(props.shown){
    return (
      <>  
      <div className='card hvr-pulse' onClick={props.onClick}>
          <div className="image-container">
              <h4>{props.individual}</h4>
              <img src={props.image} alt='dinosaur-card'></img>
          </div>
          <div className="card-overlay">
          </div>
      </div>
  
      </>
    )
  } else {
    return (<></>)
  }
}

interface cardProps {
    individual: string
    image: string
    shown: boolean;
    onClick: () => void
}