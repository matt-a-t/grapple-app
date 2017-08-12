import React, {Component} from 'react'

class TieUpFail extends Component {
  render() {
    return(
      <div>
        <p>You continue control of the grapple, but you fail to tie the defender up.</p>
        <div className='buttons'>
          <button onClick={this.props.back}>Ok</button>
        </div>
      </div>
    )
  }
}

export default TieUpFail