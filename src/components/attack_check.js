import React, {Component} from 'react'

class AttackCheck extends Component {
  render() {
    return (
      <div>
        <p>If you do not have Improved Grapple or Grab, you provoke an AOO.</p>
        <p>If you are hit, take the damage as a penalty on your grapple attempt.</p>
        <p>If you do not have 2 free hands, take a -4 to the check.</p>
        <p>Roll your CMB against their CMD.</p>
        <div className='buttons'>
          <button onClick={this.props.success}>Success</button>
          <button onClick={this.props.fail}>Fail</button>
        </div>
      </div>
    )
  }
}

export default AttackCheck