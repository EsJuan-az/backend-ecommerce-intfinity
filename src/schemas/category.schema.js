const joi = require('joi');
const { companyId, id, name, active, offset, limit } = require('./props');

module.exports = {
    s_findAllCategories: {
        query: joi.object({
            name: name.optional(),
            offset: offset.optional(),
            limit: limit.optional(),
        }),
        params: joi.object({
            company_id: companyId.required(),
        }),
    },
    s_findOneCategory: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createCategory: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            id: id.forbidden,
            name: name.required(),
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
