import React from 'react'
import { DoughnutChart } from '../generic/DoughnutChart'
import { BudgetWheelKey } from './BudgetWheelKey'

export class BudgetWheel extends React.Component {
  render () {
    const budgetSpent = this.props.totalBudget - this.props.remainingBudget

    const doughnutOptions = {
      data: {
        budgetSpent: budgetSpent,
        remainingBudget: this.props.remainingBudget
      },
      centerValue: `${((budgetSpent / this.props.totalBudget) * 100).toFixed(0)}%`,
      doughnutHoleSize: 0.9
    }

    return (
      <div className='budgetDetails'>
        <DoughnutChart
          options={doughnutOptions}
          width='200px'
          height='200px' />
        <BudgetWheelKey
          budgetSpent={budgetSpent}
          budgetRemaining={this.props.remainingBudget} />
      </div>
    )
  }
}
