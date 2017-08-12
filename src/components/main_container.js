import React, {Component} from 'react'
import _ from 'lodash'

import Grapple from './grapple'

class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.addGrapple = this.addGrapple.bind(this)
    this.clearGrapple = this.clearGrapple.bind(this)
  }

  addGrapple(type) {
    var newGrapples = this.props.grapples.push({
      type: type,
      success: 'check',
      maintain: false,
      maintainCheck: false,
      maintainAction: '',
      key: this.props.grapples.length
    })

    this.setState((prevState, props) => {
      return ({grapples: newGrapples, playerStatus: 'grappled'})
    })
  }

  clearGrapple(key) {
    var newGrapples = this.props.grapples
    newGrapples = _.remove(newGrapples, function(x) {
      return (x.key === key)
    })

    this.setState((prevState, props) => {
      return ({grapples: newGrapples})
    })
  }

  renderGrapples() {
    return this.props.grapples.map((grapple) => {
      return(
        <div className="col-md-6 col-12 grapple" key={grapple.key}>
          <Grapple grapple={grapple} clearGrapple={this.clearGrapple} />
        </div>
      )
    })
  }
  
  render(){
    return(
      <div>
        <div className="row">
          <div className="col text-center">
            <h1>Add a grapple</h1>
            <div className="row">
              <div className="col header-button" 
                onClick={() => {this.addGrapple('attack')}}>
                Attack
              </div>
              <div className="col header-button" 
                onClick={() => {this.addGrapple('defend')}}>
                Defend
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.renderGrapples()}
        </div>
      </div>
    )
  }
}

export default MainContainer