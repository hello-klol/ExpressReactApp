import React from 'react'

export class CampaignSummary extends React.Component {
  render () {
    return (
      <div class={this.props.class} >

        <h1>{this.props.data.name}</h1>
        <p>
          <span class='subtitle'>Goal: </span>
          {this.props.data.goal}
        </p>
        <p>
          <span className='subtitle'>Total budget: </span>
          {this.props.data.total_budget}
        </p>
        <p>
          <span className='subtitle'>Status: </span>
          {this.props.data.status}
        </p>

      </div>
    )
  }
}
