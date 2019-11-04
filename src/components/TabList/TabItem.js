import React, { Component } from 'react'

export default class TabItem extends Component {
    render() {
        const tab = this.props.tab;
        return (
            <li className="tab-item">
                <div className="tab-item-inner">
                    <img className="tab-icon" width="34" height="34" src={tab.favIconUrl} alt="page favicon" />
                    <h6 className="tab-title">{tab.title}</h6>
                </div>
            </li>
        )
    }
}