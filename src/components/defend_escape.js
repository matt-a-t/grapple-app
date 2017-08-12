import React, {Component} from 'react'

class DefendEscape extends Component {
  render() {
    return (
      <div>
        <p>You have escaped your enemy's grapple attempts.</p>
        <p>You both lose the grappled condition.</p>
        <p>This is the end of your Standard Action</p>
        <div className='buttons'>
          <button onClick={() => this.props.clearGrapple(this.props.grappleKey)}>Ok</button>
        </div>
      </div>
    )
  }
}

export default DefendEscape