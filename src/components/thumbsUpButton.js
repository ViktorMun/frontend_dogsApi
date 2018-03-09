import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { toggleLike } from '../actions/toggle-like'
import '../routes/Styles.css';



class UpButton extends React.Component {

  handleClick() {
    this.props.toggleLike(this.props.dogs)
  }

  render() {
    console.log(this)
    return (
      <button
        className="thumbsUp"
        onClick={this.handleClick.bind(this)}>like</button>
    )
  }
}

const mapStateToProps = ({ dogs }) => ({  dogs })

export default connect(mapStateToProps, { toggleLike })(UpButton)
