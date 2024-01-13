const joi = require('joi');

const id = joi.number().integer().min(1);
const name = joi.string().min(3);
const direction = joi.string();
const city = joi.string();
const email = joi.string().email();
const phone = joi.string().min(10).max(15);
const active = joi.boolean();
const companyId = joi.number().integer().min(1);

module.exports = {
    s_findAllBranches: {
        params: joi.object({
            company_id: companyId.required(),
        }),
    },
    s_findOneBranch: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createBranch: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            name: name.required(),
            direction: direction.required(),
            city: city.required(),
            email: email.required(),
            phone: phone.required(),
            companyId: companyId.required(),
            active: active.forbidden(),
        }),
    },
    s_updateBranch: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            name: name.optional(),
            direction: direction.optional(),
            city: city.optional(),
            email: email.optional(),
            phone: phone.optional(),
            companyId: companyId.optional(),
            active: active.forbidden(),
        }),
    },
    s_deleteBranch: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
