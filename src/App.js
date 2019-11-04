/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import TabList from './components/TabList/TabList'
import { getAllWindowTabs } from './services/api'
import GroupsContainer from './components/GroupBox/GroupsContainer'

//Workaround for npm error when importing this stylesheet from the component under same directory
import './components/TabList/styles.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTabs: [],
      tabs: [],
      groups: []
    }
  }


  createGroup = group => {
    this.setState(prevState => ({ groups: { ...prevState.groups, group } }))
  }

  getTabs() {
    const callback = result => {
      this.setState({
        tabs: result
      })
    }

    getAllWindowTabs(callback)
  }

  componentDidMount() {
    this.getTabs()
  }

  render() {
    return (
      <div className="App">
        <GroupsContainer groups={this.state.groups} createGroup={this.createGroup} />
        <TabList windowTabs={this.state.tabs} />
      </div>
    )
  }
}


export default App
