import React from 'react'
import { connect } from 'react-redux'
import { CampaignSummary } from './CampaignSummary'

const mapStateToProps = state => {
  console.log(state.data)
  return { data: state.data }
}

const campaignList = connect(mapStateToProps)(campaign => {
  return (
    <CampaignSummary
      key={`campaign_${campaign.id}`}
      data={campaign}
      onClick={() => this.props.changeState(campaign.id)} />
  )
})

export class CampaignList extends React.Component {
  render () {
    return (
      <div className={this.props.class}>
        {campaignList}
      </div>
    )
  }
}
