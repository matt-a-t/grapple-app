import React, {Component} from 'react'

class TieUpSuccess extends Component {
  render() {
    return(
      <div>
        <p>You use rope to tie up the defender. This works like a pin effect, but the DC to escape the bonds is equal to 20 + your CMB (instead
          of your CMD). If the DC to escape is higher than 20 + defender's CMB, the target cannot escape from the bonds, even with a natural
          20 on the check.
        </p>
        <div className='buttons'>
          <button onClick={() => this.props.clearGrapple(this.props.grapple.key)}>Ok</button>
        </div>
      </div>
    )
  }
}

export default TieUpSuccess