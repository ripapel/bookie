import React from 'react'
import NewGroup from './NewGroup'
import Group from './Group'

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
                <div className="group-container">

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
                </div>
            </div>
        </div>

    )
}
