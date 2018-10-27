
module.exports.create = (connection) => {
    return {
        Campaign: require('./campaign')(connection),
        Platform: require('./platform')(connection),
        TargetAudience: require('./target_audience')(connection),
        Creatives: require('./creatives')(connection),
        Insights: require('./insights')(connection)
    }

}