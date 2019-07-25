import React from 'react'
import { Link } from 'react-router-dom'


const PhoneCard = (props) => {
  console.log(props)



  const { name, manufacturer, price, imageFileName, id } = props.data

  return (
    <div className='PhoneCard'>
      <div className="card" style={{"width": "18rem"}}>
        <img className="card-img-top" src='' alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Made by {manufacturer}</p>
          <p className="card-text">For Only <strong>{price}€</strong></p>
          <Link to={`/${id}`} className="btn btn-primary">See More</Link>
        </div>
      </div>
    </div>
  )
}

export default PhoneCard