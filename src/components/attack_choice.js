import React, {Component} from 'react'

class AttackChoice extends Component {
  render() {
    return (
      <div>
        <p>You have a few choices to complete your grapple</p>
        <ul>
          <li>Move self and defender</li>
          <li>Inflict damage to defender</li>
          <li>Give defender the pinned condition</li>
          <li>Restrain defender and maintain grapple (No action)</li>
        </ul>
        <div className='buttons'>
          <button onClick={() => this.props.maintainAction('move')}>Move</button>
          <button onClick={() => this.props.maintainAction('damage')}>Damage</button>
          <button onClick={() => this.props.maintainAction('pin')}>Pin</button>
          <button onClick={() => this.props.maintainAction('restrain')}>Restrain</button>
        </div>
      </div>
    )
  }
}

export default AttackChoice