import React, {Component} from 'react'

class DefendOther extends Component {
  render() {
    return (
      <div>
        <p>You may take any action that does not require two hands. Depending on the action, it may be an Immediate, Free, Swift, Move,
          Standard, or Full-round Action</p>
        <p>You may attack or full attack with a light or one-handed weapon. This attack receives a -2 to hit.</p>
        <p>You may attempt to cast a spell without somatic components and whose material components (if any) you have in hand. You must also
          pass a concentration check (DC 10 + attacker's CMB + spell lvl) or lose the spell.</p>
        <p>You are still grappled.</p>
        <div className='buttons'>
          <button onClick={this.props.defendBack}>Ok</button>
        </div>
      </div>
    )
  }
}

export default DefendOther