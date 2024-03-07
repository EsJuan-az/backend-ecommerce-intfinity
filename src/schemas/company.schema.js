const joi = require('joi');
const { id, holder, name, NIT, bank_account_type, social_reason, bank, phone, email, password, active, bank_account_number, offset, limit } = require('./props');

module.exports = {
    s_findAllCompanies: {
        query: joi.object({
            name: name.optional(),
            email: email.optional(),
            offset: offset.optional(),
            limit: limit.optional(),
        }),
    },
    s_findOneCompany: {
        params: joi.object({
            company_id: id.required(),
        }),
    },
    s_createCompany: {
        body: joi.object({
            holder: holder.required(),
            name: name.required(),
            NIT: NIT.required(),
            bank_account_type: bank_account_type.required(),
            social_reason: social_reason.required(),
            bank: bank.required(),
            bank_account_number: bank_account_number.required(),
            phone: phone.required(),
            email: email.required(),
            password: password.required(),
            active: active,
        }),
    },
    s_updateCompany: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            holder: holder.optional(),
            name: name.optional(),
            NIT: NIT.optional(),
            bank_account_type: bank_account_type.optional(),
            social_reason: social_reason.optional(),
            bank: bank.optional(),
            bank_account_number: bank_account_number.optional(),
            phone: phone.optional(),
            email: email.optional(),
            password: password.optional(),
            active: active,
        }),
    },
    s_deleteCompany: {
        params: joi.object({
            company_id: id.required(),
        }),
    },
    s_loginCompany: {
        body: joi.object({
            email: email.required(),
            password: password.required(),
        }),
    },
};
