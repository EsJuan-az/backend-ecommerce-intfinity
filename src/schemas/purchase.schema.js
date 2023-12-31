const joi = require('joi');

const id = joi.number().integer();
const stringOptional = joi.string().allow(null, '');
const enumPaymentMethod = joi.string().valid('TRANSFERENCIA', 'EFECTIVO', 'ECOMMERCE');

module.exports = {
    s_findAllPurchases: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOnePurchase: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createPurchase: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            customer_email: joi.string().email().allow(null),
            payment_method: enumPaymentMethod.required(),
            invoice_number: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_updatePurchase: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            customer_email: joi.string().email().allow(null),
            payment_method: enumPaymentMethod,
            invoice_number: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deletePurchase: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
