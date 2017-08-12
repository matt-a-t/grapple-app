import React, {Component} from 'react'

class Restrain extends Component {
  render() {
    return (
      <div>
        <p>You have restrained the defender and successfully maintained the grapple</p>
        <div className='buttons'>
          <button onClick={this.props.back}>Ok</button>
        </div>
      </div>
    )
  }
}

export default Restrain