const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlatformSchema = new Schema(
    {
        type:             { type: String },
        status:           { type: String, required: true, enum: ['Scheduled', 'Delivering', 'Ended'] }, //is this inherited from the campaign?
        total_budget:     { type: Number },
        remaining_budget: { type: Number },
        start_date:       { type: Date },
        end_date:         { type: Date },
        target_audience:  { type: Schema.Types.ObjectId, ref: 'TargetAudience' },
        creatives:        { type: Schema.Types.ObjectId, ref: 'Creatives' },
        insights:         { type: Schema.Types.ObjectId, ref: 'Insights' }
    }
)

module.exports = connection => connection.model('Platform', PlatformSchema);