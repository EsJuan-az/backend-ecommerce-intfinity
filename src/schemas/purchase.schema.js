const joi = require('joi');
const { companyId, id, customer_email, payment_method, invoice_number, branchId, userId, active } = require('./props');

module.exports = {
    s_findAllPurchases: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        query: joi.object({}),
    },
    s_findOnePurchase: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createPurchase: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            customer_email: customer_email.optional(),
            payment_method: payment_method.required(),
            invoice_number: invoice_number.optional(),
            branchId: branchId.required(),
            userId: userId.optional(),
            active: active,
        }),
    },
    s_updatePurchase: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            customer_email: customer_email.optional(),
            payment_method: payment_method.optional(),
            invoice_number: invoice_number.optional(),
            branchId: branchId.optional(),
            userId: userId.optional(),
            active: active,
        }),
    },
    s_deletePurchase: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
};
