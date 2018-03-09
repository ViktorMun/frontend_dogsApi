import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchRandomDog } from '../actions/showAllDog'



class AllDogs4 extends React.Component {
  static propTypes = {
      fetchRandomDog: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchRandomDog()
  }

  render() {
    const {RandomDog} = this.props

    return (
      <div>
        <img className="doggy_picture" src= { RandomDog }
        alt="first_dog_picture" />
      </div>

    )
  }
}


const mapStateToProps = function (state) {
  return {
    RandomDog: state.dogs[4]
  }
}

export default connect(mapStateToProps, { fetchRandomDog })(AllDogs4)
