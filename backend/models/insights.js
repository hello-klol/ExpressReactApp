const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InsightsSchema = new Schema(
    {
        impressions:        { type: Number },
        clicks:             { type: Number },
        website_visits:     { type: Number },
        nanos_score:        { type: Number },
        cost_per_click:     { type: Number },
        click_through_rate: { type: Number },
        advanced_kpi_1:     { type: Number },
        advanced_kpi_2:     { type: Number }
    }
);

module.exports = connection => connection.model('Insights', InsightsSchema);