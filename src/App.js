import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import POIList from './components/POIList'

class App extends Component {
  render() {
    return (
      <main>
        <HelloWorld />
        <POIList />
      </main>
    )
  }
}

export default App
