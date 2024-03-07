const joi = require('joi');
const { companyId, id, email, password, name, last_name, phone, active, offset, limit } = require('./props');

module.exports = {
    s_findAllCustomers: {
        query: joi.object({
            email: email.optional(),
            name: name.optional(),
            last_name: last_name.optional(),
            offset: offset.optional(),
            limit: limit.optional(),
        }),
        params: joi.object({
            company_id: companyId.required(),
        }),
    },
    s_findOneCustomer: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createCustomer: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            email: email.required(),
            password: password.required(),
            name: name.required(),
            last_name: last_name.required(),
            phone: phone.required(),
            active: active,
        }),
    },
    s_updateCustomer: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            email: email.optional(),
            password: password.optional(),
            name: name.optional(),
            last_name: last_name.optional(),
            phone: phone.optional(),
            active: active,
        }),
    },
    s_deleteCustomer: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_loginCustomer: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            email: email.required(),
            password: password.required(),
        }),
    },
};
