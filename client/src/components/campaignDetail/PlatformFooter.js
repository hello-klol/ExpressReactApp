import React from 'react'
import { InfoButton } from '../generic/InfoButton'

export class PlatformFooter extends React.Component {
  render () {
    return (
      <div class='platformFooter'>
        <h3>Total</h3>
        <span>${this.props.totalBudget}</span>
        <div className='info'>
          <InfoButton
            onClick={() => { console.log('Implement further info') }} />
        </div>
      </div>
    )
  }
}
