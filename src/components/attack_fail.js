import React, {Component} from 'react'

class AttackFail extends Component {
  render() {
    return (
      <div>
        <p>Neither party is considered grappled. The grapple attempt is over.</p>
        <div className='buttons'>
          <button onClick={() => {this.props.clearGrapple(this.props.grapple.key)}}>Ok</button>
        </div>
      </div>
    )
  }
}

export default AttackFail