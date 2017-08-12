import React, {Component} from 'react'

class DefenseCheck extends Component {
  render() {
    return (
      <div>
        <p>If the attacker does not have Improved Grapple or Grab, you get an attack of opportunity.</p>
        <p>If the AOO hits, the attacker takes the damage as a penalty on the grapple attempt.</p>
        <p>The attacker rolls CMB against your CMD.</p>
        <div className='buttons'>
          <button onClick={this.props.success}>Escape</button>
          <button onClick={this.props.fail}>Grappled</button>
        </div>
      </div>
    )
  }
}

export default DefenseCheck