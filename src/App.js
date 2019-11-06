/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import TabList from './components/TabList/TabList'
import { getAllWindowTabs, storeData, retrieveData } from './services/api'
import GroupsContainer from './components/GroupBox/GroupsContainer'

//Workaround for npm error when importing this stylesheet from the component under same directory
import './components/TabList/styles.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeGroup: null,
      tabs: [],
      groups: {},
      lastId: 0
    }
  }

  createGroup = group => {

    this.setState(prevState => ({
      groups: { ...prevState.groups, [prevState.lastId]: group },
      lastId: ++prevState.lastId
    }))

  }

  groupAll = () => {
    if (this.state.activeGroup !== null)
      return
    
    
    
  }

  retrieveGroups() {
    const callback = result => {
      this.setState({
        groups: result.groups
      })
    }

    retrieveData('groups', callback)

  }

  storeGroups = () => {
    storeData({ 'groups': this.state.groups }, _ => console.log('Success'))
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
    this.retrieveGroups()
  }

  componentDidUpdate(prevProps, prevState) {

    //Need to add comparison to avoid unnecessary re-rendering
    // if (Object.keys(prevState.groups).length !==
    //   Object.keys(this.state.groups).length) {

    // }
  
    console.log('..........Component update........')
    console.log(this.state)
    this.storeGroups()
  }

  render() {
    return (
      <div className="App">
        <GroupsContainer
          groups={this.state.groups}
          createGroup={this.createGroup} />
        <TabList windowTabs={this.state.tabs} />
      </div>
    )
  }
}


export default App
