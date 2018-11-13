import React from 'react'
import { CampaignPlatform } from './CampaignPlatform'
import { BackButton } from '../generic/BackButton'

export class CampaignDetail extends React.Component {
  render () {
    const campaignData = this.props.data.campaign
    const platformData = campaignData.platforms
    const platformList = Object.keys(platformData).map(platform => {
      return (
        <CampaignPlatform
          key={`platform_${platform}`}
          type={platformData[platform].type}
          data={platformData[platform]}
        />
      )
    })

    return (
      <div className='campaignDetail'>
        <div>
          <BackButton
            onClick={this.props.onExit} />
          <h1>{campaignData.name}</h1>
        </div>
        {platformList}
      </div>
    )
  }
}
