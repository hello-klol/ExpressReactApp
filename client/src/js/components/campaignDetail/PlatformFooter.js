import React from 'react'
import { InfoButton } from '../generic/InfoButton'

export class PlatformFooter extends React.Component {
  render () {
    return (
      <div className='platformFooter'>
        <h3>Total</h3>
        <span>${this.props.totalBudget}</span>
        <div className='info'>
          <InfoButton /> 
        </div>
      </div>
    )
  }
}
