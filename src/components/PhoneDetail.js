import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../mockData/phones.json'


class PhoneDetail extends React.Component {
  state = {
    phone: null
  }

  componentDidMount() {
    this.fetchPhone()
  }

  fetchPhone = () => {
    // const id = this.props.match.params
    const Phone = Data.find(x => x.id === this.props.match.params)
    console.log(Phone)
  }

  render() {
  // console.log(this.props.match.params)
  return (
    <div className='PhoneDetail'>
      <Link to='/' className="btn btn-primary">Go Back</Link>
      <h2>yabadabaduuuuu</h2>
    </div>
  )
  }
}

export default PhoneDetail