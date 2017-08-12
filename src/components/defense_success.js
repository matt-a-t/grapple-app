import React, {Component} from 'react'

class DefenseSuccess extends Component {
  render() {
    return (
      <div>
        <p>You have successfully escaped the grapple.</p>
        <p>Neither party is grappled and the grapple attempt is over.</p>
        <div className='buttons'>
          <button onClick={() => {this.props.clearGrapple(this.props.grapple.key)}}>Ok</button>
        </div>
      </div>
    )
  }
}

export default DefenseSuccess