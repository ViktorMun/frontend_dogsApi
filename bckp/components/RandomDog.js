import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchRandomDog } from '../actions/randomDog'

class RandomDog extends React.Component {
  static propTypes = {
    fetchRandomDog: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchRandomDog()
  }

  render() {
    const {randomDog} = this.props

    if (!randomDog) return null

    return (
      <div>
        <img className="doggy_picture"
         src= {randomDog.url}
         alt="first_dog_picture" />
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    randomDog: state.dogs[0]
  }
}

export default connect(mapStateToProps, { fetchRandomDog })(RandomDog)
