import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Page(props) {
    const { page, index } = props
    return (
        <Draggable draggableId={`page-${page.id}`} index={index}>
            {provided => (
                <li
                    className="pages-list-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="pages-list-item-inner">
                        <img alt="" src={page.favIconUrl} class="page-favicon" />
                        <a className="page-name" target="blank" href={page.url}>{page.title}</a>
                        {
                            props.isGroupPage &&
                            <button
                                className="remove-group-page-btn"
                                onClick={props.removePageFromGroup}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        }
                    </div>
                    {provided.placeholder}
                </li>
            )}
        </Draggable>
    )
}
