import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

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
                        <h3 className="page-name">{page.title}</h3>
                    </div>
                    {provided.placeholder}
                </li>
            )}
        </Draggable>
    )
}
