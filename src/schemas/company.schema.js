const joi = require('joi');

const id = joi.number().integer().min(1);
const holder = joi.string();
const name = joi.string();
const NIT = joi.string();
const bank_account_type = joi.string().valid("CORRIENTE", "AHORROS");
const social_reason = joi.string();
const bank = joi.string();
const bank_account_number = joi.string();
const email = joi.string().email();
const password = joi.string();
const phone = joi.string().min(10).max(15);
const active = joi.boolean();

module.exports = {
    s_findAllModel: {
        
    },
    s_findOneModel: {
        params: joi.object({
            company_id: id.required(),
        }),
    },
    s_createModel: {
        body: joi.object({
            id: id.forbidden(),
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
            active: active.forbidden(),
        }),
    },
    s_updateModel: {
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
            active: active.forbidden(),
        }),
    },
    s_deleteModel: {
        params: joi.object({
            company_id: id.required(),
        }),
    },
};
