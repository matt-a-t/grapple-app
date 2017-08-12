import React, {Component} from 'react'

class Damage extends Component {
  render() {
    return (
      <div>
        <p>You inflict damage from an unarmed strike, natural attack, an attack made with armor spikes, or a light / one-handed weapon.
          Damage can be either lethal or nonlethal</p>
        <div className='buttons'>
          <button onClick={this.props.back}>Ok</button>
        </div>
      </div>
    )
  }
}

export default Damage