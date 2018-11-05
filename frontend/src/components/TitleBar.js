import React from 'react'

export class TitleBar extends React.Component {
  render () {
    return (
      <div class='titleBar'>
        {this.props.title}
      </div>
    )
  }
}
