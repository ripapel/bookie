import React from 'react'
import NewGroup from './NewGroup'
import Group from './Group'
import { Droppable } from 'react-beautiful-dnd'

export default function GroupsContainer(props) {
    return (
        <div id="groups-container">
            <h2 className="title">Bookmark Groups</h2>
            <button
                id="add-group-btn"
                onClick={props.toggleIsCreatingGroup}
            >
                Create Group
                </button>
            <div id="groups-container-inner">
                <Droppable droppableId="groups-container">
                    {
                        provided => (
                            <div
                                className="group-container"
                                ref={provided.innerRef}>
                                {
                                    props.isCreatingGroup &&
                                    <NewGroup
                                        handleChangeNewGroupName={props.handleChangeNewGroupName}
                                        newGroup={props.newGroup}
                                        createGroup={props.createGroup}
                                        toggleIsCreatingGroup={props.toggleIsCreatingGroup}
                                    />
                                }
                                {props.groups.map(g =>
                                    <Group group={g} key={g.id}
                                        handleChangeGroupName={props.handleChangeGroupName}
                                        deleteGroup={props.deleteGroup} />)}
                                {provided.placeholder}
                            </div>
                        )
                    }
                </Droppable>

            </div>
        </div>

    )
}
