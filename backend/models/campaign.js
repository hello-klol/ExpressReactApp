const mongoose = require('mongoose')

const CampaignSchema = new mongoose.Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true },
    goal: { type: String },
    total_budget: { type: Number },
    status: { type: String, required: true, enum: ['Scheduled', 'Delivering', 'Ended'] },
    platforms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Platform' }]
  }
)

module.exports = connection => connection.model('Campaign', CampaignSchema)
