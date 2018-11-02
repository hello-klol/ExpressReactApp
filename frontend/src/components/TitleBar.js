import React from 'react'

export class TitleBar extends React.Component {
  render () {
    return (
      <div class={this.props.class}>
        {this.props.title}
      </div>
    )
  }
}
