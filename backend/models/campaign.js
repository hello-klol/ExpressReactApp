const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CampaignSchema = new Schema(
    {
        id:           { type: Number },
        name:         { type: String, required: true },
        goal:         { type: String },
        total_budget: { type: Number },
        status:       { type: String, required: true, enum: ['Scheduled', 'Delivering', 'Ended'] },
        platforms:    [{ type: Schema.Types.ObjectId, ref: 'Platform' }]
    }
)

module.exports = connection => connection.model('Campaign', CampaignSchema);