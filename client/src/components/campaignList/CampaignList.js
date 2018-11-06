import React from 'react'
import { CampaignSummary } from './CampaignSummary'

export class CampaignList extends React.Component {
  render () {
    const campaignList = this.props.data.map(campaign => {
      return (
        <CampaignSummary
          key={`campaign_${campaign.id}`}
          data={campaign}
          onClick={() => this.props.changeState(campaign.id)} />
      )
    })

    return (
      <div className={this.props.class}>
        {campaignList}
      </div>
    )
  }
}
