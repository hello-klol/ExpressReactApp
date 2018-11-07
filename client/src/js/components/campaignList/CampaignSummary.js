import React from 'react'

export class CampaignSummary extends React.Component {
  render () {
    return (
      <div
        className='campaignSummary'
        onClick={this.props.onClick}>

        <h1>{this.props.data.name}</h1>
        <p>
          <span className='subtitle'>Goal: </span>
          {this.props.data.goal}
        </p>
        <p>
          <span className='subtitle'>Total budget: </span>
          ${this.props.data.total_budget}
        </p>
        <p>
          <span className='subtitle'>Status: </span>
          {this.props.data.status}
        </p>

      </div>
    )
  }
}
