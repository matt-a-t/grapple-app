import React, {Component} from 'react'

class TieUp extends Component {
  render() {
    return(
      <div>
        <p>Make a CMB check - 10 against defender's CMD</p>
        <div className='buttons'>
          <button onClick={this.props.tieUpSuccess}>Success</button>
          <button onClick={this.props.tieUpFail}>Failure</button>
        </div>
      </div>
    )
  }
}

export default TieUp