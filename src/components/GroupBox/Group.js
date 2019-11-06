import React, { Component } from 'react'
import Container from './Container'
import FaviconsBoard from './FaviconsBoard'
import GroupName from './GroupName'

class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
        }
    }


    render() {
        const { group } = this.props;
        return (
            <Container>
                <FaviconsBoard>
                    {/* {
                        tabs.map(t =>
                            <img src={t.favIconUrl} alt="page favicon" />)
                    } */}
                </FaviconsBoard>
                <GroupName isEditing={this.state.isEditing} groupName={group.name} />
            </Container>
        )
    }
}

export default Group