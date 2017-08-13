import React, {Component} from 'react'

class StatusMenu extends Component {
  render() {
    return(
      <div className="col">
        <h3>Grappling Related Conditions</h3>
        <h6>Grappled</h6>
        <p>Both Attacker and Defender have the grappled condition unless otherwise stated. The grappled condition 
          inflicts the following penalties:</p>
          <ul>
            <li>Cannot Move</li>
            <li>-4 to Dex</li>
            <li>-2 on all attack rolls and Combat Manuever checks, except those to escape a grapple</li>
            <li>No actions that require 2 hands</li>
            <li>Spells require concentration check (DC 10 + grappler's CMB + spell lvl) or lose the spell</li>
            <li>Grappled creatures cannot make attacks of opportunity</li>
          </ul>
        <h6>Pinned</h6>
        <p>When a target is pinned, the attacker keeps the grappled condition (unless otherwise stated). The defender is
          given the pinned condition, which has the following penalties:</p>
          <ul>
            <li>Cannot move</li>
            <li>Denied your Dex bonus</li>
            <li>Additional -4 AC</li>
            <li>Cannot cast spell with somatic or material component (unless materials were already in hand)</li>
            <li>Spells require concentration check (DC 10 + grappler's CMB + spell lvl) or lose the spell</li>
          </ul>
        <h6>Tied Up</h6>
        <p>When a creature is tied up, they retain the same effects as for a pin. The ropes do not need to maintain the grapple
          each turn, and the DC to escape is 20 + attacker's CMB (instead of CMD). A natural 20 on the check does not guarantee
          success, so it is possible to be tied up and unable to escape</p>
        <h6>Questions? Comments? Concerns?</h6>
        <p>I'd love to hear your thoughts on this app. I am also a freelance web developer that is always looking for my next project.
          Please feel free to contact me at <a href="mailto:matt.armstro@gmail.com?Subject=Grapple%20App" target="_top">
            matt.armstro@gmail.com</a>.</p>
      </div>
    )
  }
}

export default StatusMenu