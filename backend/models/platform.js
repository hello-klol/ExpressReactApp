const mongoose = require('mongoose')
const mongooseId = mongoose.Schema.Types.ObjectId

const PlatformSchema = new mongoose.Schema(
  {
    type: { type: String },
    status: { type: String, required: true, enum: ['Scheduled', 'Delivering', 'Ended'] }, // is this inherited from the campaign?
    total_budget: { type: Number },
    remaining_budget: { type: Number },
    start_date: { type: Date },
    end_date: { type: Date },
    target_audience: { type: mongooseId, ref: 'TargetAudience' },
    creatives: { type: mongooseId, ref: 'Creatives' },
    insights: { type: mongooseId, ref: 'Insights' }
  }
)

module.exports = connection => connection.model('Platform', PlatformSchema)
