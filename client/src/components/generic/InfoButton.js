import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export class InfoButton extends React.Component {
  render () {
    return (
      <div
        className='button info'
        onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    )
  }
}
