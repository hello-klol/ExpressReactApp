import React from 'react'
import { TitleBar } from './TitleBar'
import { CampaignList } from './CampaignList'

import '../styles/App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.setState({ currentState: 'CampaignList', title: 'Campaigns List' })
  }

  render () {
    return (
      <div id='app'>
        <TitleBar class='titleBar' title='Campaigns List' />
        <CampaignList class='campaignList' data={this.props.data} />
      </div>
    )
  }
}

export default App
