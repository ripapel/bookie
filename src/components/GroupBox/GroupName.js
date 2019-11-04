import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class GroupName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    renderGroupName() {
        if (this.props.isEditing === true) {
            return (
                <div className="group-name">
                    <div className="input-container">
                        <input type="text" className="group-name-txt" />
                    </div>
                    <div className="controllers-container">
                        <button >
                            <FontAwesomeIcon icon={faSave} color={'#3acf40'} />
                        </button>
                        <button onClick={this.props.onCancel}>
                            <FontAwesomeIcon icon={faTimes} color={'crimson'} />
                        </button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="group-name">
                    <label>
                        {this.state.name}
                    </label>
                    <button>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                </div>
            )
        }
    }



    render() {
        return (
            <>
                {this.renderGroupName()}
            </>

        )
    }
}

export default GroupName
