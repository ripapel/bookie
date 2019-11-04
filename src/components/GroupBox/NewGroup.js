import React, { Component } from 'react'
import Container from './Container'
import FaviconsBoard from './FaviconsBoard'
import GroupName from './GroupName'

export default class NewGroup extends Component {

    constructor(props){
        super(props)
        this.state = {
            isEditing: true
        }
    }

    renderNewGroup() {
        if (this.props.isCreatingGroup) {
            return (
                <Container>
                    <FaviconsBoard>
                    </FaviconsBoard>
                    <GroupName onCancel={this.props.toggleIsCreatingGroup} isEditing={true} />
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
