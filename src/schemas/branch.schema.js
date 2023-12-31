const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3);
const direction = joi.string();
const email = joi.string().email();
const phone = joi.string().min(10).max(15);

module.exports = {
    s_findAllBranches: {
        query: joi.object({}),
        params: joi.object({
            company_id: id.required(),
        }),
    },
    s_findOneBranch: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createBranch: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            name: name.required(),
            direction: direction.required(),
            email: email.required(),
            phone: phone.required(),
            active: joi.forbidden(),
        }),
    },
    s_updateBranch: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            name: name.optional(),
            direction: direction.optional(),
            email: email.optional(),
            phone: phone.optional(),
            active: joi.forbidden(),
        }),
    },
    s_deleteBranch: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
