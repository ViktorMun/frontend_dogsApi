import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { addDog } from '../actions/users'



class DogList extends React.Component {
  static propTypes = {
      dogs: PropTypes.string.isRequired
  }

  addDog = (dogs) => {
    this.props.addDog(dogs)
  }


  render() {
    const {dogs} = this.props
    return (
      <div>
        <button onClick={ () => this.addDog(dogs) }>X</button>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    dogs: state.dogs,
    user: state.user
  }
}

export default connect(mapStateToProps, { addDog })(DogList)
