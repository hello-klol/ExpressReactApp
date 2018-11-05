import React from 'react'
import { CampaignPlatform } from './CampaignPlatform'
import { BackButton } from '../generic/BackButton'

export class CampaignDetail extends React.Component {
  render () {
    const campaignData = this.props.data[0]
    const platformData = campaignData.platforms
    const platformList = Object.keys(platformData).map(platform => {
      return (
        <CampaignPlatform
          key={`platform_${platform}`}
          type={platform}
          data={platformData[platform]}
        />
      )
    })

    return (
      <div class='campaignDetail'>
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
