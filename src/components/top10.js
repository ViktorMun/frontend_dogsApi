import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchGetAllDog } from '../actions/top10'
import { fetchGetUsers } from '../actions/top10'




class Dogs extends React.Component {
  static propTypes = {
    fetchGetAllDog: PropTypes.func.isRequired,
    fetchGetUsers: PropTypes.func.isRequired

  }

  componentWillMount() {console.log('второй этап')
    this.props.fetchGetAllDog()
    this.props.fetchGetUsers()
  }

  renderDoggo(dog, idx) {
    return (
      <p key={idx}>{ dog.id } { dog.breed } { dog.userId} { dog.name }</p>
    )
  }


  render() {
    const {top10} = this.props
    console.log(top10)
    return (
      <div>
        { this.props.top10.map((dog, idx) => this.renderDoggo(dog, idx)) }

      </div>
    )
  }
}


const mapStateToProps = ({ top10 }) => ({ top10 })

export default connect(mapStateToProps, { fetchGetAllDog, fetchGetUsers })(Dogs)
