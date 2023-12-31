const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const email = joi.string().email();
const phone = joi.string().min(10).max(15);
const booleanRequired = joi.boolean().required();

module.exports = {
    s_findAllProviders: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneProvider: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createProvider: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            name: stringRequired,
            description: stringOptional,
            NIT: stringRequired,
            direction: stringRequired,
            phone: phone.required(),
            email: email.required(),
            active: joi.forbidden(),
        }),
    },
    s_updateProvider: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            name: stringOptional,
            description: stringOptional,
            NIT: stringOptional,
            direction: stringOptional,
            phone: phone,
            email: email,
            active: joi.forbidden(),
        }),
    },
    s_deleteProvider: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
