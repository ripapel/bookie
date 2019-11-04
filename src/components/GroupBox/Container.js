import React from 'react'

export default function Container(props) {
    return (
        <div className="group-container">
            {props.children}
        </div>
    )
}
