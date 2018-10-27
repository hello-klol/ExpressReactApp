const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TargetAudienceSchema = new Schema(
    {
        languages: { type: [String] },
        genders:   { type: [String] }, // , enum: ['M', 'F', 'X', 'N'] male, female, transgender, non-gendered
        age_range: { type: [Number] }, // min:0, max:150 },
        locations: { type: [String] },
        tags:      { type: [String] }
    }
)



module.exports = connection => connection.model('TargetAudience', TargetAudienceSchema);