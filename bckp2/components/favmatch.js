import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchGetAllDog } from '../actions/favmatch'



class Fav extends React.Component {
  static propTypes = {
    fetchGetAllDog: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchGetAllDog()
  }

  renderDoggo(dog, idx) {
    return (
      <p key={idx}> { dog.id } { dog.breed } { dog.userId }</p>
    )
  }

  render() {
    const {favmatch} = this.props
    console.log(favmatch)
    return (
      <div>
        { this.props.favmatch.map((dog, idx) => this.renderDoggo(dog, idx)) }
      </div>
    )
  }
}


const mapStateToProps = ({ favmatch }) => ({ favmatch })

export default connect(mapStateToProps, { fetchGetAllDog })(Fav)
