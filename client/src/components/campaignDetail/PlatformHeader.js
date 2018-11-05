import React from 'react'

export class PlatformHeader extends React.Component {
  render () {
    return (
      <div class='platformHeader'>
        <h1>{this.props.type}</h1>
        <h3>{this.props.status}</h3>
      </div>
    )
  }
}
