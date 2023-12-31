const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const email = joi.string().email();
const phone = joi.string().min(10).max(15);

module.exports = {
    s_findAllModel: {
        query: joi.object({}),
    },
    s_findOneModel: {
        params: joi.object({
            company_id: id.required(),
        }),
    },
    s_createModel: {
        body: joi.object({
            holder: stringRequired,
            name: stringRequired,
            NIT: stringRequired,
            bank_account_type: stringRequired,
            social_reason: stringRequired,
            bank: stringRequired,
            bank_account_number: stringRequired,
            phone: phone.required(),
            email: email.required(),
            password: stringRequired,
            active: joi.forbidden(),
        }),
    },
    s_updateModel: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            holder: stringOptional,
            name: stringOptional,
            NIT: stringOptional,
            bank_account_type: stringOptional,
            social_reason: stringOptional,
            bank: stringOptional,
            bank_account_number: stringOptional,
            phone: phone,
            email: email,
            password: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deleteModel: {
        params: joi.object({
            company_id: id.required(),
        }),
    },
};
