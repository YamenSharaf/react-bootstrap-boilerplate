import React, { Component } from 'react';
import 'sass/app.scss';
import RouterOutlet from 'router/RouterOutlet'
import AppNavbar from '@/AppNavbar'
import AppFooter from '@/AppFooter'

class App extends Component {
  render() {
    return (
      <div id="App">
        <AppNavbar/>
        <RouterOutlet/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
