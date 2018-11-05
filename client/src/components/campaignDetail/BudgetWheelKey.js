import React from 'react'

export class BudgetWheelKey extends React.Component {
  render () {
    return (
      <div class='budgetWheelKey'>
        <div>
          <h3>Spent</h3>
          <span>${this.props.budgetSpent}</span>
        </div>
        <div>
          <h3>Remaining</h3>
          <span>${this.props.budgetRemaining}</span>
        </div>
      </div>
    )
  }
}