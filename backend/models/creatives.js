const mongoose = require('mongoose')

const CreativesSchema = new mongoose.Schema(
  {
    header: { type: String },
    subheader: { type: String },
    description: { type: String },
    url: { type: String },
    image: { type: String }
  }
)

module.exports = connection => connection.model('Creatives', CreativesSchema)
