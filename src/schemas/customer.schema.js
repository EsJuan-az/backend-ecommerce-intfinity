const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const booleanRequired = joi.boolean().required();

module.exports = {
    s_findAllCustomers: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneCustomer: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createCustomer: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            email: stringRequired,
            password: stringRequired,
            name: stringRequired,
            last_name: stringRequired,
            phone: stringRequired.min(10).max(15).unique(),
            active: joi.forbidden(),
        }),
    },
    s_updateCustomer: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            email: stringOptional,
            password: stringOptional,
            name: stringOptional,
            last_name: stringOptional,
            phone: stringOptional.min(10).max(15).unique(),
            active: joi.forbidden(),
        }),
    },
    s_deleteCustomer: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
