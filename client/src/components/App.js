import React from 'react'
import { TitleBar } from './TitleBar'
import { View } from './View'
import { State } from '../constants/States'
import { Action } from '../constants/Actions'
import { requestCampaignDetails, requestCampaignList } from '../requests/Campaign'

import '../styles/App.css'

const title = new Map([
  [State.LOADING, 'Loading app...'],
  [State.CAMPAIGN_LIST, 'Campaigns List'],
  [State.CAMPAIGN_DETAIL, 'Campaign Details']
])

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentState: State.LOADING
    }
    this.changeState = this.changeState.bind(this)
    this.setCampaignList()
  }

  async handleCampaignListClick (campaignId) {
    const data = await requestCampaignDetails(campaignId)
    this.setState({
      currentState: State.CAMPAIGN_DETAIL,
      title: title.get(State.CAMPAIGN_DETAIL),
      data: data
    })
  }

  async setCampaignList () {
    const data = await requestCampaignList()
    this.setState({
      currentState: State.CAMPAIGN_LIST,
      title: title.get(State.CAMPAIGN_LIST),
      data: data
    })
  }

  changeState (info) {
    switch (info.type) {
      case Action.CAMPAIGN_LIST_CLICK:
        this.handleCampaignListClick(info.campaignId)
        return
      case Action.CAMPAIGN_DETAIL_EXIT:
        this.setCampaignList()
    }
  }

  render () {
    return (
      <div id='app'>
        <TitleBar
          title={title.get(this.state.currentState)} />
        <View
          state={this.state.currentState}
          data={this.state.data}
          onChange={this.changeState} />
      </div>
    )
  }
}

export default App
