const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CreativesSchema = new Schema(
    {
        header:      { type: String },
        subheader:   { type: String },
        description: { type: String },
        url:         { type: String },
        image:       { type: String }
    }
)

module.exports = connection => connection.model('Creatives', CreativesSchema);