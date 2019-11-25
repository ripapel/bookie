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
      openPages: { all: [], filtered: [] },
      isCreatingGroup: false,
      newGroup: { 'id': '', 'name': '', pages: { all: [], filtered: [] } },
      groups: { all: [], filtered: [] },
      selectedGroup: null,
      filter: ''
    }
  }

  getGroups = () => {
    if (this.state.filter === '')
      return this.state.groups.all
    else
      return this.state.groups.filtered
  }

  getPages = () => {
    if (this.state.filter === '')
      return this.state.openPages.all
    else
      return this.state.openPages.filtered
  }

  createGroup = () => {
    const newGroup = { ...this.state.newGroup }

    if (newGroup.name === '')
      return

    const uuid = require('uuid/v1')
    newGroup['id'] = uuid()

    const groups = [...this.state.groups.all, newGroup]

    this.setState(prevState => ({
      groups: { ...prevState.groups, all: groups },
      newGroup: { 'id': '', name: '', pages: { all: [], filtered: [] } }
    }))
    this.toggleIsCreatingGroup()
  }

  selectGroup = id => {
    const group = this.state.groups.all.find(g => g.id === id)
    this.setState({
      selectedGroup: group
    })
  }

  cancelGroupSelection = () => {
    this.setState({
      selectedGroup: null
    })
  }

  deleteGroup = id => {
    const groups = [...this.state.groups.all.filter(g => g['id'] !== id)]
    this.setState(prevState => (
      {
        groups: { ...prevState.groups, all: [...groups] }
      }
    ))
  }

  removePageFromGroup = (groupId, pageId) => {
    const groups = [...this.state.groups.all]
    const group = groups.find(g => g.id === groupId)
    group.pages.all = group.pages.all.filter(p => p.id !== pageId)
    groups.map(g => g.id === groupId ? { ...group } : g)

    this.setState(prevState => (
      { groups: { ...prevState.groups, all: groups } }))

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
    const groups = [...this.state.groups.all.map(p => p.id === id ? { ...p, 'name': name } : p)]

    this.setState(prevState => (
      { groups: { ...prevState.groups, all: groups } }
    ))
  }

  handleChangeFilter = e => {
    const filter = e.target.value.toLowerCase()
    const groups = [...this.state.groups.all]
    const openPages = [...this.state.openPages.all]
    const filterPage = (p =>
      p.title.toLowerCase().indexOf(filter) >= 0 || p.url.indexOf(filter) > 0)

    groups.forEach(g => {
      g.pages.filtered = g.pages.all.filter(filterPage)
    })

    const filteredGroups = groups.filter(g =>
      g.name.toLowerCase().indexOf(filter) >= 0)
    const filteredOpenPages = openPages.filter(filterPage)

    this.setState(prevState => ({
      filter: filter,
      groups: { all: prevState.groups.all, filtered: filteredGroups },
      openPages: { all: prevState.openPages.all, filtered: filteredOpenPages }
    }))
  }

  componentDidMount() {
    const callback = result => {
      this.setState({
        openPages: { all: result, filtered: [] }
      })
    }

    getCurrentWindowTabs(callback)
  }

  onDragEnd = result => {
    console.log(result)
    const { destination, source, type } = result



    if (!destination)
      return

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index)
      return

    if (type === 'pages' && destination.id !== 'page-list') {
      const groups = [...this.state.groups.all]
      const group = groups.find(g => g.id === destination.droppableId)
      const page = this.state.openPages.all[source.index]
      group.pages.all.push(page)
      groups.map(g => g.id === destination.id ? { ...group } : g)
      this.setState(prevState => (
        {
          groups: { ...prevState.groups, all: groups }
        }
      ))
    }
  }


  render() {
    return (
      <div id="app">
        <div id="top-bar">
          <input type="text"
            id="search-app"
            placeholder="Filter by group or page name..."
            onChange={this.handleChangeFilter}
            defaultValue={this.state.filter}
          />
        </div>
        <div id="app-body">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <GroupsContainer
              toggleIsCreatingGroup={this.toggleIsCreatingGroup}
              isCreatingGroup={this.state.isCreatingGroup}
              handleChangeNewGroupName={this.handleChangeNewGroupName}
              newGroup={this.state.newGroup}
              groups={this.getGroups()}
              createGroup={this.createGroup}
              handleChangeGroupName={this.handleChangeGroupName}
              deleteGroup={this.deleteGroup}
              selectGroup={this.selectGroup}
              filter={this.state.filter}
            />
            <PagesList
              filter={this.state.filter}
              pages={this.getPages()}
              selectedGroup={this.state.selectedGroup}
              cancelGroupSelection={this.cancelGroupSelection}
              removePageFromGroup={this.removePageFromGroup}
            />
          </DragDropContext>
        </div>
      </div>
    )
  }
}

export default App
