import React, { Component } from 'react';

import MainContainer from './components/main_container'
import StatusMenu from './components/status_menu'

import {slide as Menu} from 'react-burger-menu'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      grapples: [],
    }
  }

  render() {
    var styles = {
      bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        left: '20px',
        top: '10px'
      },
      bmBurgerBars: {
        background: '#ECD5B7'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#ECD5B7'
      },
      bmMenu: {
        background: '#785535',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        color: '#ECD5B7'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }

    return (
      <div className="App">
        <div style={{backgroundColor:'#474C27', height: '50px'}}>
          <Menu 
            styles={styles} 
            width={'80%'}  
            pageWrapId="page-wrap"
          >
            <StatusMenu />
          </Menu>
        </div>
        <main id="page-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                <MainContainer grapples={this.state.grapples} playerStatus={this.state.playerStatus} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;


//todo: animations
//todo: style
//todo: color