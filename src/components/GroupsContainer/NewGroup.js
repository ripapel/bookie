import React from 'react'

export default function NewGroup(props) {
    return (
        <div className="group">
            <div className="row group-top-row">
                <input type="text"
                    className="edit-group-name"
                    defaultValue={props.newGroup.name}
                    onChange={props.handleChangeNewGroupName}
                    autoFocus
                    />
                <div className="actions-container">
                    <button className="group-action create-group" onClick={props.createGroup}>Create</button>
                    <button className="group-action delete-group" onClick={props.toggleIsCreatingGroup}>Cancel</button>
                </div>
            </div>
            <div className="group-page-favicons-container">
                <div className="group-page-favicon placeholder"></div>
                <div className="group-page-favicon placeholder"></div>
                <div className="group-page-favicon placeholder"></div>
                <div className="group-page-favicon placeholder"></div>
            </div>
        </div>
    )
}
