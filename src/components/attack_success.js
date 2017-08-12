import React, {Component} from 'react'

class AttackSuccess extends Component {
  render() {
    return (
      <div>
        <p>You have successfully grappled your target</p>
        <p>On your next grapple attempt, you may take the following actions</p>
        <ul>
          <li>Maintain the grapple. Take a +5 to your CMB vs defender's CMD</li>
          <li>Release the grapple as a free action</li>
          <li>Attempt to tie the defender up</li>
        </ul>
        <div className='buttons'>
          <button onClick={this.props.maintain}>Maintain</button>
          <button onClick={this.props.fail}>Release</button>
          <button onClick={this.props.tieUp}>Tie Up</button>
        </div>
      </div>
    )
  }
}

export default AttackSuccess