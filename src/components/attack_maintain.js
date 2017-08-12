import React, {Component} from 'react'

class AttackMaintain extends Component {
  render() {
    return (
      <div>
        <p>Make a CMB check against the defender's CMD. You get a +5 on the check.</p>
        <div className='buttons'>
          <button onClick={this.props.maintainSuccess}>Success</button>
          <button onClick={this.props.fail}>Fail</button>
        </div>
      </div>
    )
  }
}

export default AttackMaintain