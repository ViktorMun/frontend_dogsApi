import React from 'react'
import PropTypes from 'prop-types'
import '../routes/Styles.css';



class DownButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <button className="thumbsDown" onClick={this.props.onClick}>dislike</button>
    )
  }
}

export default DownButton
