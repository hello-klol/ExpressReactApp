import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { InfoButton } from '../generic/InfoButton'

class PlatformMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  handleClick (event) {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose () {
    this.setState({ anchorEl: null })
  }

  render () {
    const { anchorEl } = this.state

    return (
      <div>
        <InfoButton
          aria-owns={anchorEl ? 'platformMenu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        />
        <Menu
          id='platformMenu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Target Audience</MenuItem>
          <MenuItem onClick={this.handleClose}>Creatives</MenuItem>
          <MenuItem onClick={this.handleClose}>Insights</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
