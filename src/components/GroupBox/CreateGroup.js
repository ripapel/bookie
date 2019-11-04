import React from 'react'
import Container from './Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import FaviconsBoard from './FaviconsBoard'

function CreateGroup(props) {
    return (
        <Container>
            <FaviconsBoard>
                <div className="group-inner">
                    <button type="button" className="new-group-btn" onClick={props.toggleIsCreatingGroup}>
                        <FontAwesomeIcon icon={faPlusCircle} className="new-group-icon" />
                    </button>
                </div>
            </FaviconsBoard>
        </Container>
    )
}

export default CreateGroup
