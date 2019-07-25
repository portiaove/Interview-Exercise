import React from 'react'
import Data from '../mockData/phones.json'
import PhoneCard from './PhoneCard'

class PhoneList extends React.Component {

  state = {
    data: Data
  }
  render() {
    const { data } = this.state
    const Cards = data.map((el, i) => ( <PhoneCard data={el} key={i} />))

    return (
      <div className='PhoneList'>
        {Cards}
      </div>
    )
  }
}

export default PhoneList