import React from 'react'

const Card = (props) => {
    return (
            <div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.firstname}</h5>
    <p className="card-text">{props.something}</p>
    <p className="card-text">{props.something}</p>
    <p className="card-text">{props.something}</p>
  </div>
</div>

    )
}

export default Card;
