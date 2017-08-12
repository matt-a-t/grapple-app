import React, {Component} from 'react'

import AttackCheck from './attack_check'
import DefenseCheck from './defense_check'

import AttackSuccess from './attack_success'
import DefenseSuccess from './defense_success'

import AttackFail from './attack_fail'
import DefenseFail from './defense_fail'

import AttackMaintain from './attack_maintain'

import AttackChoice from './attack_choice'

import Move from './move'
import Damage from './damage'
import Pin from './pin'
import Restrain from './restrain'
import Pinned from './pinned'

import TieUp from './tie_up'
import TieUpSuccess from './tie_up_success'
import TieUpFail from './tie_up_fail'

import DefendActionCheck from './defend_action_check'
import DefendOther from './defend_other'
import DefendControl from './defend_control'
import DefendEscape from './defend_escape'
import DefendActionFail from './defend_action_fail'

class Grapple extends Component {
  constructor(props) {
    super(props)

    this.success = this.success.bind(this)
    this.fail = this.fail.bind(this)
    this.maintain = this.maintain.bind(this)
    this.maintainSuccess = this.maintainSuccess.bind(this)
    this.maintainAction = this.maintainAction.bind(this)
    this.back = this.back.bind(this)
    this.tieUp = this.tieUp.bind(this)
    this.tieUpSuccess = this.tieUpSuccess.bind(this)
    this.tieUpFail = this.tieUpFail.bind(this)
    this.defendControl = this.defendControl.bind(this)
    this.defendEscape = this.defendEscape.bind(this)
    this.defendOther = this.defendOther.bind(this)
    this.defendBack = this.defendBack.bind(this)
    this.defendActionSuccess = this.defendActionSuccess.bind(this)
    this.defendActionFail = this.defendActionFail.bind(this)
    this.defendToAttack = this.defendToAttack.bind(this)
    this.maintainPin = this.maintainPin.bind(this)
    this.pinnedTieUp = this.pinnedTieUp.bind(this)
  }

  success() {
    var newGrapple = this.props.grapple
    newGrapple.success = 'yes'

    this.setState((prevState, props) => {
      return ({grapple: newGrapple})
    })
  }

  fail() {
    var newGrapple = this.props.grapple
    newGrapple.success = 'no'

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  maintain() {
    var newGrapple = this.props.grapple
    newGrapple.maintain = true

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }


  maintainSuccess() {
    var newGrapple = this.props.grapple
    newGrapple.maintainCheck = true

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  maintainAction(action) {
    var newGrapple = this.props.grapple
    newGrapple.maintainAction = action

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  back() {
    var newGrapple = this.props.grapple
    newGrapple.success = 'yes'
    newGrapple.maintain = false
    newGrapple.maintainCheck = false
    newGrapple.maintainAction = ''
    newGrapple.tieUpCheck = undefined

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  tieUp() {
    var newGrapple = this.props.grapple
    newGrapple.maintainAction = 'tie-up'

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  tieUpSuccess() {
    var newGrapple = this.props.grapple
    newGrapple.tieUpCheck = true

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  tieUpFail() {
    var newGrapple = this.props.grapple
    newGrapple.tieUpCheck = false

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendControl() {
    var newGrapple = this.props.grapple
    newGrapple.defendAction = 'control'

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendEscape() {
    var newGrapple = this.props.grapple
    newGrapple.defendAction = 'escape'

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendOther() {
    var newGrapple = this.props.grapple
    newGrapple.defendAction = 'other'

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendBack() {
    var newGrapple = this.props.grapple
    newGrapple.defendAction = undefined
    newGrapple.defendCheck = undefined

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendActionSuccess() {
    var newGrapple = this.props.grapple
    newGrapple.defendCheck = true

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendActionFail() {
    var newGrapple = this.props.grapple
    newGrapple.defendCheck = false

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  defendToAttack() {
    var newGrapple = this.props.grapple
    newGrapple.type = 'attack'
    this.defendBack()
    this.back()

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  maintainPin() {
    var newGrapple = this.props.grapple
    newGrapple.maintain = true
    newGrapple.maintainCheck = false
    newGrapple.maintainAction = ''

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  pinnedTieUp() {
    var newGrapple = this.props.grapple
    newGrapple.maintainAction = 'tie-up'
    newGrapple.tieUpCheck = true

    this.setState((prevState, props) => {
      return({grapple: newGrapple})
    })
  }

  render(){
    if (this.props.grapple.type === 'attack' && this.props.grapple.success === 'check') {
      return(<AttackCheck grapple={this.props.grapple} success={this.success} fail={this.fail} />)
    } else if (this.props.grapple.type === 'defend' && this.props.grapple.success === 'check') {
      return (<DefenseCheck grapple={this.props.grapple} success={this.success} fail={this.fail} />)
    } else if (this.props.grapple.type === 'attack' && this.props.grapple.success === 'yes' && this.props.grapple.maintain === false && this.props.grapple.maintainAction === '' ) {
      return (<AttackSuccess grapple={this.props.grapple} fail={this.fail} maintain={this.maintain} tieUp={this.tieUp} />)
    } else if (this.props.grapple.type === 'defend' && this.props.grapple.success === 'yes') {
      return (<DefenseSuccess grapple={this.props.grapple} clearGrapple={this.props.clearGrapple} />)
    } else if (this.props.grapple.type === 'attack' && this.props.grapple.success === 'no') {
      return (<AttackFail grapple={this.props.grapple} clearGrapple={this.props.clearGrapple} />)
    } else if (this.props.grapple.type === 'defend' && this.props.grapple.success === 'no' && this.props.grapple.defendAction === undefined) {
      return (<DefenseFail grapple ={this.props.grapple} defendControl={this.defendControl} defendEscape={this.defendEscape} defendOther={this.defendOther} />)
    } else if (this.props.grapple.type === 'attack' && this.props.grapple.maintain === true && this.props.grapple.maintainCheck === false) {
      return (<AttackMaintain grapple={this.props.grapple} fail={this.fail} maintainSuccess={this.maintainSuccess} />)
    } else if (this.props.grapple.type === 'attack' && this.props.grapple.maintainCheck === true && this.props.grapple.maintainAction === '') {
      return (<AttackChoice maintainAction={this.maintainAction} />)
    } else if (this.props.grapple.maintainAction === 'move') {
      return (<Move back={this.back} fail={this.fail} />)
    } else if (this.props.grapple.maintainAction === 'damage') {
      return (<Damage back={this.back} />)
    } else if (this.props.grapple.maintainAction === 'pin') {
      return (<Pin maintainAction={this.maintainAction} />)
    } else if (this.props.grapple.maintainAction === 'restrain') {
      return (<Restrain back={this.back} />)
    } else if (this.props.grapple.maintainAction === 'pinned') {
      return (<Pinned grapple={this.props.grapple} fail={this.fail} maintain={this.maintainPin} pinnedTieUp={this.pinnedTieUp} />)
    } else if (this.props.grapple.type === 'attack' && this.props.grapple.maintainAction === 'tie-up' && this.props.grapple.tieUpCheck === undefined) {
      return(<TieUp tieUpSuccess={this.tieUpSuccess} tieUpFail={this.tieUpFail} />)
    } else if (this.props.grapple.maintainAction === 'tie-up' && this.props.grapple.tieUpCheck === true) {
      return(<TieUpSuccess grapple={this.props.grapple} clearGrapple={this.props.clearGrapple} />)
    } else if (this.props.grapple.maintainAction === 'tie-up' && this.props.grapple.tieUpCheck === false) {
      return(<TieUpFail back={this.back} />)
    } else if (this.props.grapple.defendAction === 'control' && this.props.grapple.defendCheck === undefined) {
      return (<DefendActionCheck defendActionSuccess={this.defendActionSuccess} defendActionFail={this.defendActionFail} />)
    } else if (this.props.grapple.defendAction === 'escape' && this.props.grapple.defendCheck === undefined) {
      return (<DefendActionCheck defendActionSuccess={this.defendActionSuccess} defendActionFail={this.defendActionFail} />)
    } else if (this.props.grapple.defendAction === 'other' && this.props.grapple.defendCheck === undefined) {
      return (<DefendOther defendBack={this.defendBack} />)
    } else if (this.props.grapple.defendAction === 'control' && this.props.grapple.defendCheck === true) {
      return (<DefendControl defendToAttack={this.defendToAttack} />)
    } else if (this.props.grapple.defendAction === 'escape' && this.props.grapple.defendCheck === true) {
      return (<DefendEscape grappleKey={this.props.grapple.key} clearGrapple={this.props.clearGrapple} />)
    } else if (this.props.grapple.defendCheck === false) {
      return (<DefendActionFail defendBack={this.defendBack} />)
    }
    
    else {
      return (
        <div>
          This is a mistake
        </div>
      )
    }
  }
}

export default Grapple