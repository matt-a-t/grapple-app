import React, {Component} from 'react'

class Pinned extends Component {
  render() {
    return (
      <div>
        <p>You have successfully pinned your target. They have the pinned condition, 
          and you lose your DEX bonus to AC</p>
        <p>On your next grapple attempt, you may take the following actions</p>
        <ul>
          <li>Maintain the pin. Take a +5 to your CMB vs defender's CMD</li>
          <li>Automatically succeed at tying defender up</li>
          <li>Release the pin as a free action</li>
        </ul>
        <div className='buttons'>
          <button onClick={this.props.maintain}>Maintain</button>
          <button onClick={this.props.pinnedTieUp}>Tie Up</button>
          <button onClick={this.props.fail}>Release</button>
        </div>
      </div>
    )
  }
}

export default Pinned