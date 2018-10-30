const mongoose = require('mongoose')

const TargetAudienceSchema = new mongoose.Schema(
  {
    languages: { type: [String] },
    genders: { type: [String] }, // , enum: ['M', 'F', 'X', 'N'] male, female, transgender, non-gendered/neutral/none
    age_range: { type: [Number] }, // min:0, max:150 },
    locations: { type: [String] },
    tags: { type: [String] }
  }
)

module.exports = connection => connection.model('TargetAudience', TargetAudienceSchema)
