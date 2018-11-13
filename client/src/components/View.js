import React from 'react'
import { CampaignList } from './campaignList/CampaignList'
import { CampaignDetail } from './campaignDetail/CampaignDetail'
import { Action } from '../constants/Actions'
import { State } from '../constants/States'

export class View extends React.Component {
  constructor (props) {
    super(props)
    this.campaignListChange = this.campaignListChange.bind(this)
    this.campaignDetailExit = this.campaignDetailExit.bind(this)
  }

  campaignListChange (campaignId) {
    const info = {
      type: Action.CAMPAIGN_LIST_CLICK,
      campaignId: campaignId
    }
    this.props.onChange(info)
  }

  campaignDetailExit () {
    const info = {
      type: Action.CAMPAIGN_DETAIL_EXIT
    }
    this.props.onChange(info)
  }

  getView (state) {
    switch (state) {
      case State.LOADING:
        return (
          <div>
          Retrieving data, please wait
          </div>
        )
      case State.CAMPAIGN_LIST:
        return <CampaignList
          className='campaignList'
          data={this.props.data}
          changeState={this.campaignListChange} />

      case State.CAMPAIGN_DETAIL:
        return <CampaignDetail
          data={this.props.data}
          onExit={this.campaignDetailExit} />
      default:
        return <div>Something went wrong</div>
    }
  }

  render () {
    return (
      <div className='view'>
        {this.getView(this.props.state)}
      </div>
    )
  }
}
