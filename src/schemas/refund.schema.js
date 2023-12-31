const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const enumType = joi.string().valid('REEMBOLSO', 'CAMBIO DE PRODUCTO', 'CAMBIO POR BONO');

module.exports = {
    s_findAllRefunds: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneRefund: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createRefund: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            customer_email: joi.string().email().allow(null),
            type: enumType.required(),
            reason: stringRequired,
            refund_number: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_updateRefund: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            customer_email: joi.string().email().allow(null),
            type: enumType,
            reason: stringRequired,
            refund_number: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deleteRefund: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
