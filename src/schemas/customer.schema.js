const joi = require('joi');

const id = joi.number().integer().min(1);
const email = joi.string().email();
const password = joi.string();
const name  = joi.string();
const last_name = joi.string();
const phone = joi.string().min(10).max(15);
const active = joi.boolean();
const companyId = joi.number.integer().min(1);

module.exports = {
    s_findAllCustomers: {
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
            active: active.forbidden(),
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
            active: active.forbidden(),
        }),
    },
    s_deleteCustomer: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
};
