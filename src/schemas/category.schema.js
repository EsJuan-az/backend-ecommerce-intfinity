const joi = require('joi');
const { companyId, id, name, active } = require('./props');

module.exports = {
    s_findAllCategories: {

    },
    s_findOneCategory: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createCategory: {
        body: joi.object({
            id: id.forbidden,
            name: name.required(),
            companyId: companyId.required(),
            active: active,
        }),
    },
    s_updateCategory: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden,
            name: name.optional(),
            companyId: companyId.optional(),
            active: active,
        }),
    },
    s_deleteCategory: {
        params: joi.object({
            id: id.required(),
        }),
    },
};
