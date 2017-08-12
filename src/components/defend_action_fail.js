import React, {Component} from 'react'

class DefendActionFail extends Component {
  render() {
    return (
      <div>
        <p>You have failed in your attempt. The attacker still controls the
          grapple.</p>
        <div className='buttons'>
          <button onClick={this.props.defendBack}>Ok</button>
        </div>
      </div>
    )
  }
}

export default DefendActionFail