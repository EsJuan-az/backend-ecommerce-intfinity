const joi = require('joi');

const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');

module.exports = {
    s_findAllCategories: {
        query: joi.object({}),
    },
    s_findOneCategory: {
        params: joi.object({
            company_id: joi.number().integer().required(),
            id: joi.number().integer().required(),
        }),
    },
    s_createCategory: {
        body: joi.object({
            name: stringRequired,
            active: joi.forbidden(),
        }),
    },
    s_updateCategory: {
        params: joi.object({
            company_id: joi.number().integer().required(),
            id: joi.number().integer().required(),
        }),
        body: joi.object({
            name: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deleteCategory: {
        params: joi.object({
            id: joi.number().integer().required(),
        }),
    },
};
