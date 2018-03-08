import React from 'react'
import PropTypes from 'prop-types'
import '../routes/Styles.css';



class UpButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <button className="thumbsUp" onClick={this.props.onClick}>like</button>
    )
  }
}

export default UpButton
