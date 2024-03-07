const joi = require('joi');
const { companyId, id, name, direction, city, email, phone, active, offset, limit } = require('./props');

module.exports = {
    s_findAllBranches: {
        query: joi.object({
            name: name.optional(),
            city: city.optional(),
            email: email.optional(),
            offset: offset.optional(),
            limit: limit.optional(),
        }),
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
            active: active,
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
            active: active,
        }),
    },
    s_deleteBranch: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
