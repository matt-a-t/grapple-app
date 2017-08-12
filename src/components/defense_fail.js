import React, {Component} from 'react'

class DefenseFail extends Component {
  render() {
    return (
      <div>
        <p>You are now grappled. You have the grappled condition and may attempt the following actions on your next turn.</p>
        <ul>
          <li>Become the controlling grappler as a standard action</li>
          <li>Escape the grapple as a standard action</li>
          <li>Attempt any action that does not require two hands</li>
        </ul> 
        <div className='buttons'>
          <button onClick={this.props.defendControl}>Control</button>
          <button onClick={this.props.defendEscape}>Escape</button>
          <button onClick={this.props.defendOther}>Other</button>
        </div>
      </div>
    )
  }
}

export default DefenseFail