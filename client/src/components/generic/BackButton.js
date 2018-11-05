import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export class BackButton extends React.Component {
  render () {
    return (
      <div
        className='button back'
        onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    )
  }
}
