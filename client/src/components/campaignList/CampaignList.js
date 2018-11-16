import React from 'react'
import { CampaignSummary } from './CampaignSummary'

export class CampaignList extends React.Component {

  campaignList (props) {
    const campaigns = props.data || []
    return campaigns.map(campaign => {
      return (
        <CampaignSummary
          key={`campaign_${campaign._id}`}
          data={campaign}
          onClick={() => props.changeState(campaign._id)} />
      )
    })
  }

  render () {
    return (
      <div className='campaignList'>
        {this.campaignList(this.props)}
      </div>
    )
  }
}
