import React, { Component } from 'react'
import './styles.css'
import CreateGroup from './CreateGroup'
import NewGroup from './NewGroup'
import Group from './Group'

class GroupsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCreatingGroup: false
        }
    }

    toggleIsCreatingGroup = _ => {
        this.setState(prevState => ({ isCreatingGroup: !prevState.isCreatingGroup }))
    }

    renderGroups = () => {
        const { groups } = this.props
        if (groups) {
            const groupValues = Object.values(groups)
            return groupValues.reverse().map(g => <Group group={g} />)
        }
    }

    render() {
        return (
            <div className="group-box">
                <div className="group-box-inner">
                    <CreateGroup toggleIsCreatingGroup={this.toggleIsCreatingGroup} />
                    <NewGroup
                        toggleIsCreatingGroup={this.toggleIsCreatingGroup}
                        isCreatingGroup={this.state.isCreatingGroup}
                        createGroup={this.props.createGroup}
                    />
                    {this.renderGroups()}
                </div>
            </div>
        )
    }
}

export default GroupsContainer