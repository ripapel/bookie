import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Page(props) {
    const { page, index } = props
    return (
        <li className="pages-list-item">
            <div className="pages-list-item-inner">
                <img alt="" src={page.favIconUrl} class="page-favicon" />
                <h3 className="page-name">{page.title}</h3>
            </div>
        </li>
    )
}
