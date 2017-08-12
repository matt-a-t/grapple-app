import React, {Component} from 'react'

class Pin extends Component {
  render() {
    return (
      <div>
        <p>You give the defender the pinned condition. You continue to have the grappled condition, but you lose your Dexterity bonus to AC</p>
        <div className='buttons'>
          <button onClick={this.props.maintainAction('pinned')}>Ok</button>
        </div>
      </div>
    )
  }
}

export default Pin