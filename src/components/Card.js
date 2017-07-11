/**
 * Created by nikolaynikiforov on 10/07/2017.
 */
import React from 'react'
const Card = ({card}) => {
  if (!card.img)
  {
    return <div width="250" height="379">No Card</div>
  }
  return <div><img width="250" height="379" src={card.img} alt={card.name}/></div>
}


export default Card;