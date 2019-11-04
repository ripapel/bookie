import React, { Component } from 'react'
import './styles.css'
import CreateGroup from './CreateGroup'
import NewGroup from './NewGroup'
import { storeValue, getValue } from '../../services/api'

class GroupsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: [],
            isCreatingGroup: false
        }
    }

    toggleIsCreatingGroup = _ => {
        this.setState(prevState => ({ isCreatingGroup: !prevState.isCreatingGroup }))
    }

    componentDidMount = _ => {
        storeValue({ 'foo': 'bar' }, function () {
            console.log('Object added')
        })

        getValue('foo', function (result) {
            console.log(result)
        })
    }

    render() {
        return (
            <div className="group-box">
                <div className="group-box-inner">
                    <CreateGroup toggleIsCreatingGroup={this.toggleIsCreatingGroup} />
                    <NewGroup toggleIsCreatingGroup={this.toggleIsCreatingGroup} isCreatingGroup={this.state.isCreatingGroup} />
                </div>
            </div>
        )
    }
}

export default GroupsContainer