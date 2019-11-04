import React, { Component } from 'react'
import TabItem from './TabItem'
// import './styles.css'

class TabList extends Component {
    render() {
        const tabs = this.props.windowTabs;
        return (
            <div className="tab-list-container">
                <h3>OPEN TABS</h3>
                <button className="group-all-btn">Group all</button>
                <ul className="tab-list">
                    {
                        tabs.map(t => <TabItem tab={t} key={t.id} />)
                    }
                </ul>
            </div>
        )
    }
}

export default TabList