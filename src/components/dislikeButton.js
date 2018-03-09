import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import '../routes/Styles.css';



class DislikeButton extends React.Component {
  _refreshPage() {
      window.location.reload();
    }

  render() {
    return ( < button
                className = "thumbsDown"
                onClick = {this._refreshPage} > Dislike </button> )
  }
}

export default DislikeButton
