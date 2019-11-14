import React from 'react'
import Page from './Page'

export default function PagesList(props) {
    const { pages } = props
    return (
        <div id="pages">
            <h2 className="title">Open Pages</h2>
            <button id="group-all-pages" >Group All</button>
            <ul id="pages-list">
                {pages.map(p => <Page page={p} key={p.id} />)}
            </ul>
        </div>
    )
}
