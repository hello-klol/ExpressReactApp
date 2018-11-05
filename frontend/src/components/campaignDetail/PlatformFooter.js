import React from 'react'
import { InfoButton } from '../generic/InfoButton'

export class PlatformFooter extends React.Component {
  render () {
    return (
      <div class='platformFooter'>
        <h3>Total</h3>
        <p>${this.props.totalBudget}</p>
        <span className='platformInfo'>
          <InfoButton
            onClick={() => { console.log('Implement further info') }} />
        </span>
      </div>
    )
  }
}
