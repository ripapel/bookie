import React, { Component } from 'react'

class GroupName extends Component {
    renderGroupName() {
        if (this.props.isEditing === true) {
            return (
                <div className="group-name">
                    <div className="input-container">
                        <input type="text"
                            autoFocus
                            defaultValue={this.props.groupName}
                            onChange={this.props.handleChangeName}
                            className="group-name-txt" />
                    </div>
                    <div className="controllers-container">
                        <button onClick={this.props.onConfirm} className="controller-save" >
                            Save
                        </button>
                        <button onClick={this.props.onCancel} className="btn-underline">
                            Cancel
                        </button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="group-name-no-edit">
                    <label>
                        {this.props.groupName}
                    </label>
                    <button className="change-group-name">
                        Change
                    </button>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderGroupName()}
            </>

        )
    }
}

export default GroupName
