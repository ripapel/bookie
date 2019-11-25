import React, { Component } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

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
        const { filter, group } = this.props
        const groupPages = filter === '' ? group.pages.all : group.pages.filtered
        
        return (
            <Draggable draggableId={id} index={this.props.index}>
                {
                    provided => (
                        <div className="group"
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                        >
                            <Droppable droppableId={id} type="pages" >
                                {
                                    provided => (
                                        <div className="group-inner"
                                            ref={provided.innerRef}
                                        >
                                            <div className="row group-top-row">
                                                {
                                                    !this.state.isEditing ?
                                                        <>
                                                            <button type="button" className="group-name"
                                                                onClick={() => { this.props.selectGroup(id) }}>
                                                                {name}</button>
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
                                            <div className="group-page-favicons-container">
                                                {groupPages.map((p, index) => (
                                                    <div key={index}>
                                                        <a href={p.url} className="group-page-url" target="blank">
                                                            <img alt="" className="group-page-favicon" src={p.favIconUrl} />
                                                        </a>
                                                        <div className="group-page-title">
                                                            <span>{p.title}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                            </Droppable>
                        </div>
                    )
                }
            </Draggable>
        )
    }
}
