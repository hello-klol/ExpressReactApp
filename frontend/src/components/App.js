import React, { Component } from 'react'
import { CampaignSummary } from './CampaignSummary'

import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Campaigns</h1>
        <ul>
          <li><CampaignSummary title='Campaign 1' /></li>
          <li><CampaignSummary title='Campaign 2' /></li>
          <li><CampaignSummary title='Campaign 3' /></li>
        </ul>
      </div>
    )
  }
}

export default App
