import React, {Component} from 'react'

class DefendControl extends Component {
  render() {
    return (
      <div>
        <p>You have taken control of the grapple.</p>
        <div className='buttons'>
          <button onClick={this.props.defendToAttack}>Ok</button>
        </div>
      </div>
    )
  }
}

export default DefendControl