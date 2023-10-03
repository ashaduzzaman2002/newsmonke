
import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
