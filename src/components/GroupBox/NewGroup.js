import React, { Component } from 'react'
import Container from './Container'
import FaviconsBoard from './FaviconsBoard'
import GroupName from './GroupName'

export default class NewGroup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isEditing: true,
            name: ''
        }
    }

    handleChangeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleCreateGroup = () => {
        this.props.createGroup({ name: this.state.name })
        this.props.toggleIsCreatingGroup()
        this.setState({
            name: ''
        })
    }

    renderNewGroup() {
        if (this.props.isCreatingGroup) {
            return (
                <Container>
                    <FaviconsBoard>
                    </FaviconsBoard>
                    <GroupName
                        onCancel={this.props.toggleIsCreatingGroup}
                        handleChangeName={this.handleChangeName}
                        groupName={this.state.name}
                        onConfirm={this.handleCreateGroup}
                        isEditing={true}
                    />
                </Container>
            )
        }

        else {
            return (
                <></>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderNewGroup()}
            </>

        )
    }
}
