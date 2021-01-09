import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <div>
          {this.props.bands.map((band, index) => {
            return <li key={index}>{band.name}</li> 
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
