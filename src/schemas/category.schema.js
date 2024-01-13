const joi = require('joi');

const id = joi.number().integer().min(1);
const name = joi.string();
const active = joi.boolean();
const companyId = joi.number().integer().min(1);
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
            active: active.forbidden(),
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
            active: active.forbidden(),
        }),
    },
    s_deleteCategory: {
        params: joi.object({
            id: id.required(),
        }),
    },
};
