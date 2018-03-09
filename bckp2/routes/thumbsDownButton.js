import React from 'react'
import PropTypes from 'prop-types'



export default class MinusOneButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <button className="MinusOne" onClick={this.props.onClick}>'dislike!'</button>
    )
  }
}

export default MinusOneButton
