import React, {Component} from 'react'

class Move extends Component {
  render() {
    return (
      <div>
        <p>Move self and defender up to 1/2 your movement speed. At the end of your movement, you can
          place defender in any square adjacent to you. If this location is hazardous, Defender recieves 
          a free attempt to break grapple with a +4 bonus</p>
        <div className='buttons'>
          <button onClick={this.props.back}>Ok</button>
          <button onClick={this.props.fail}>They escaped</button>
        </div>
      </div>
    )
  }
}

export default Move