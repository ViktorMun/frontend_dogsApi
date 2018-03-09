import React from 'react'
import PropTypes from 'prop-types'



export default class PlusOneButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <button className="PlusOne" onClick={this.props.onClick}>'like!'</button>
    )
  }
}

export default PlusOneButtonA
