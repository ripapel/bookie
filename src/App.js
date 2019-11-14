import React, { Component } from 'react'
import './App.css'
import GroupsContainer from './components/GroupsContainer/GroupsContainer'
import PagesList from './components/PagesList/PagesList'
import { getCurrentWindowTabs } from './services/api'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openPages: [],
      isCreatingGroup: false,
      newGroup: { 'id': '', 'name': '', pages: [] },
      groups: []
    }
  }


  createGroup = () => {
    const newGroup = { ...this.state.newGroup }

    if (newGroup.name === '')
      return

    const uuid = require('uuid/v1')
    newGroup['id'] = uuid()

    const groups = [...this.state.groups, newGroup]
    this.setState({
      groups: groups,
      newGroup: { 'id': '', name: '' }
    })


    this.toggleIsCreatingGroup()
  }

  deleteGroup = id => {
    const groups = [...this.state.groups.filter(g => g['id'] !== id)]
    this.setState({
      groups: groups
    })
  }

  toggleIsCreatingGroup = () => {
    this.setState(prevState => (
      {
        isCreatingGroup: !prevState.isCreatingGroup
      }
    ))
  }

  handleChangeNewGroupName = e => {
    const name = e.target.value
    this.setState(prevState => (
      { newGroup: { ...prevState.newGroup, 'name': name } }
    ))
  }

  handleChangeGroupName = (id, name) => {
    const groups = [...this.state.groups.map(p => p.id === id ? { ...p, 'name': name } : p)]
    this.setState({ groups: groups })
    console.log(this.state.groups)
  }

  componentDidMount() {
    const callback = result => {
      this.setState({
        openPages: result
      })
    }

    getCurrentWindowTabs(callback)
  }

  render() {
    return (
      <div id="app">
        <div id="top-bar">
          <input type="text" id="search-app" placeholder="Filter by group or page name..." />
        </div>
        <div id="app-body">
          <DragDropContext>
            <GroupsContainer
              toggleIsCreatingGroup={this.toggleIsCreatingGroup}
              isCreatingGroup={this.state.isCreatingGroup}
              handleChangeNewGroupName={this.handleChangeNewGroupName}
              newGroup={this.state.newGroup}
              groups={this.state.groups}
              createGroup={this.createGroup}
              handleChangeGroupName={this.handleChangeGroupName}
              deleteGroup={this.deleteGroup}
            />
            <PagesList pages={this.state.openPages} />
          </DragDropContext>
        </div>
      </div>
    )
  }
}

export default App
