import React from 'react'
import Page from './Page'
import { Droppable } from 'react-beautiful-dnd'

export default function PagesList(props) {
    const { pages } = props
    return (
        <div id="pages">
            <h2 className="title">Open Pages</h2>
            <button id="group-all-pages" >Group All</button>
            <Droppable droppableId="page-list">
                {
                    provided => (
                        <ul id="pages-list"
                            ref={provided.innerRef}
                        >
                            {pages.map((p, index) => <Page page={p} key={p.id} index={index} />)}
                            {provided.placeholder}
                        </ul>
                    )
                }
            </Droppable>

        </div>
    )
}
