import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchGetAllDog } from '../actions/randomDog'

export class Dogs extends PureComponent {
  static propTypes = {
    fetchGetAllDog: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchGetAllDog()
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="dogs">{dogs}</p>
        <p className="score">{score}</p>
      </li>
    )
  }
}

export default connect(mapStateToProps, { fetchGetAllDog })(Dogs)
