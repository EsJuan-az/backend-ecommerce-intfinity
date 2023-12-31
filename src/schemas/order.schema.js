const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const enumStatus = joi.string().valid('EN ESPERA', 'CONFIRMADO', 'ENTREGADO');
const booleanRequired = joi.boolean().required();

module.exports = {
    s_findAllOrders: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneOrder: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createOrder: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            status: enumStatus.default('EN ESPERA'),
            bill_reference: stringOptional,
            direction: stringRequired,
            active: joi.forbidden(),
        }),
    },
    s_updateOrder: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            status: enumStatus,
            bill_reference: stringOptional,
            direction: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deleteOrder: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
