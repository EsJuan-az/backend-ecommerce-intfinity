const models = [
    require('./users'),
];
function defineModels( sequelize ){
    for( let m of Object.keys(models) ){
        const { model, schema } = models[m]
        model.init( schema, model.config( sequelize ) );
    }
}

module.exports = defineModels;