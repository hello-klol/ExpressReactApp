import React from 'react'
import { TitleBar } from './TitleBar'
import { View, ChangeType } from './View'

import '../styles/App.css'

export const State = {
  CAMPAIGN_LIST: Symbol('CampaignList'),
  CAMPAIGN_DETAIL: Symbol('CampaignDetail')
}

const title = new Map([
  [State.CAMPAIGN_LIST, 'Campaigns List'],
  [State.CAMPAIGN_DETAIL, 'Campaign Details']
])

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentState: State.CAMPAIGN_LIST,
      title: title.get(State.CAMPAIGN_LIST),
      data: this.props.data
    }
    this.changeState = this.changeState.bind(this)
  }

  handleCampaignListClick (campaignId) {
    const campaignData = this.props.data.filter((campaign) => {
      return campaign.id === campaignId
    })
    // TODO: make API call for data
    this.setState({
      currentState: State.CAMPAIGN_DETAIL,
      title: title.get(State.CAMPAIGN_DETAIL),
      campaignId: campaignId,
      data: campaignData
    })
  }

  setCampaignList () {
    this.setState({
      currentState: State.CAMPAIGN_LIST,
      title: title.get(State.CAMPAIGN_LIST),
      campaignId: undefined,
      data: this.props.data
    })
  }

  changeState (info) {
    switch (info.type) {
      case ChangeType.CAMPAIGN_LIST_CLICK:
        this.handleCampaignListClick(info.campaignId)
        return
      case ChangeType.CAMPAIGN_DETAIL_EXIT:
        this.setCampaignList()
    }
  }

  render () {
    return (
      <div id='app'>
        <TitleBar
          title={this.state.title} />
        <View
          state={this.state.currentState}
          data={this.state.data}
          onChange={this.changeState} />
      </div>
    )
  }
}

export default App
