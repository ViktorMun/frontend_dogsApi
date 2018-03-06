import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export default class PlusOneButton extends PureComponent {
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
