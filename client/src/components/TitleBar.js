import React from 'react'

export class TitleBar extends React.Component {
  render () {
    return (
      <div className='titleBar'>
        {this.props.title}
      </div>
    )
  }
}
