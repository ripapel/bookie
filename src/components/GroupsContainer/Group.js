import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'


export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            name: this.props.group.name,
            id: this.props.group.id
        }
    }

    handleChangeName = e => {
        this.setState({
            name: e.target.value
        })
    }

    toggleIsEditing = () => {
        this.setState(prevState => (
            { isEditing: !prevState.isEditing }
        ))
    }

    render() {
        const { name, id } = this.state
        return (
            <Draggable draggableId={id} index={this.props.index}>
                {
                    provided => (
                        <div className="group"
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                        >
                            <div className="row group-top-row">
                                {
                                    !this.state.isEditing ?
                                        <>
                                            <h2 className="group-name">{name}</h2>
                                            <div className="actions-container">
                                                <button className="group-action warning-btn" onClick={this.toggleIsEditing}>Edit</button>
                                                <button
                                                    className="group-action danger-btn"
                                                    onClick={() => { this.props.deleteGroup(id) }}
                                                >
                                                    Delete
                                        </button>
                                            </div>
                                        </> :
                                        <>
                                            <input type="text" className="edit-group-name"
                                                defaultValue={name} autoFocus
                                                onChange={this.handleChangeName} />
                                            <div className="actions-container">
                                                <button
                                                    className="group-action primary-btn"
                                                    onClick={() => {
                                                        this.props.handleChangeGroupName(id, name)
                                                        this.toggleIsEditing()
                                                    }}>
                                                    Save
                                        </button>
                                                <button className="group-action danger-btn" onClick={this.toggleIsEditing}>Cancel</button>
                                            </div>
                                        </>
                                }



                            </div>
                            {/* <div className="group-page-favicons-container">
                    <div className="group-page-favicon"></div>
                    <div className="group-page-favicon"></div>
                    <div className="group-page-favicon"></div>
                    <div className="group-page-favicon"></div>
                </div> */}
                        </div>
                    )
                }
            </Draggable>


        )
    }
}
