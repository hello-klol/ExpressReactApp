import React from 'react'
import { CampaignSummary } from './CampaignSummary'

export class CampaignList extends React.Component {
  render () {
    const campaignList = this.props.data.map(campaign => {
      return (
        <CampaignSummary key={`campaign_${campaign.id}`} class='campaignSummary' data={campaign} />
      )
    })

    return (
      <div class={this.props.class} >
        {campaignList}
      </div>
    )
  }
}
