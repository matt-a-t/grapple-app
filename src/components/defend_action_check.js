import React, {Component} from 'react'

class DefendActionCheck extends Component {
  render() {
    return(
      <div>
        <p>Make a CMB or Escape Artist check against the attacker's CMD</p>
        <div className='buttons'>
          <button onClick={this.props.defendActionSuccess}>Success</button>
          <button onClick={this.props.defendActionFail}>Fail</button>
        </div>
      </div>
    )
  }
}

export default DefendActionCheck