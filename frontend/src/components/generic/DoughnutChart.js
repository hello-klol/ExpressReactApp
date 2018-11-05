import React from 'react'

export class DoughnutChart extends React.Component {
  componentDidMount () {
    this.draw(this.props.options)
  }

  drawSegment (ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fill()
  }

  draw (options) {
    const colors = ['#0073d0', '#acd3f1']// options.colors
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')

    const totalValue = Object.keys(options.data).reduce((total, category) => {
      return total + options.data[category]
    }, 0)

    const segments = Object.keys(options.data).map((category) => {
      const value = options.data[category]
      return 2 * Math.PI * (value / totalValue)
    })

    let startAngle = 0
    let colorIndex = 0
    segments.forEach((segment) => {

      this.drawSegment(
        ctx,
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width / 2, canvas.height / 2),
        startAngle,
        startAngle + segment,
        colors[colorIndex % colors.length]
      )

      startAngle += segment
      colorIndex++
    })

    // drawing a white circle over the chart
    // to create the doughnut chart
    if (options.doughnutHoleSize) {
      this.drawSegment(
        ctx,
        canvas.width / 2,
        canvas.height / 2,
        options.doughnutHoleSize * Math.min(canvas.width / 2, canvas.height / 2),
        0,
        2 * Math.PI,
        '#FFF'
      )
    }

    if (options.centerValue) {
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = colors[0]
      ctx.font = `${0.25 * canvas.height}px sans-serif`
      ctx.fillText(options.centerValue, canvas.width / 2, canvas.height / 2)
    }
  }

  render () {
    return (
      <canvas
        class={this.props.className}
        ref='canvas'
        width={this.props.width}
        height={this.props.height} />
    )
  }
}
