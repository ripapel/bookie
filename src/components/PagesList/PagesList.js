import React from 'react'
import Page from './Page'
import { Droppable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export default function PagesList(props) {
    const { pages, selectedGroup, filter } = props

    function renderPages() {
        let selectedGroupPages = null

        if (selectedGroup !== null)
            selectedGroupPages = filter === '' ? selectedGroup.pages.all : selectedGroup.pages.filtered

        return selectedGroup === null ?
            pages.map((p, index) => <Page page={p} key={p.id} isGroupPage={false} index={index} />) :
            selectedGroupPages.map((p, index) =>
                <Page
                    page={p}
                    isGroupPage={true}
                    removePageFromGroup={() => { props.removePageFromGroup(selectedGroup.id, p.id) }}
                    key={p.id}
                    index={index}
                />)
    }

    return (
        <div id="pages">
            {selectedGroup === null ?
                <>
                    <h2 className="title">Open Pages</h2>
                    <button id="group-all-pages" >Group All</button>
                </> :
                <div className="group-pages-list-header">
                    <h2 className="title">{selectedGroup.name} Pages</h2>
                    <button className="cancel-group-selection" onClick={props.cancelGroupSelection}>
                        <FontAwesomeIcon icon={faTimes} style={{ fontSize: '16px' }} />
                    </button>
                </div>
            }
            <Droppable droppableId="page-list" type="pages">
                {
                    provided => (
                        <ul id="pages-list"
                            ref={provided.innerRef}
                        >
                            {
                                renderPages()
                            }
                            {provided.placeholder}
                        </ul>
                    )
                }
            </Droppable>

        </div>
    )
}
