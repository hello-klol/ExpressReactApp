import React from 'react'

import { BudgetWheel } from './BudgetWheel'
import { PlatformHeader } from './PlatformHeader'
import { PlatformFooter } from './PlatformFooter'

export class CampaignPlatform extends React.Component {
  render () {
    return (
      <div class='campaignPlatform'>
        <PlatformHeader
          type={this.props.type}
          status={this.props.data.status}
        />
        <BudgetWheel
          totalBudget={this.props.data.total_budget}
          remainingBudget={this.props.data.remaining_budget}
        />
        <PlatformFooter
          totalBudget={this.props.data.total_budget}
        />
      </div>
    )
  }
}
