const joi = require('joi');

const id = joi.number().integer().min(1);
const status = joi.string().valid("EN ESPERA", "CONFIRMADO", "ENTREGADO");
const bill_reference = joi.string();
const direction = joi.string();
const active = joi.boolean();
const companyId = joi.number().integer().min(1);
const customerId = joi.number().integer().min(1);


module.exports = {
    s_findAllOrders: {
        params: joi.object({
            company_id: companyId.required(),
        }),
    },
    s_findOneOrder: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createOrder: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            status: status.optional(),
            bill_reference: bill_reference.optional(),
            direction: direction.required(),
            active: active.forbidden(),
            companyId: companyId.required(),
            customerId: customerId.required(),
        }),
    },
    s_updateOrder: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            status: status.optional(),
            bill_reference: bill_reference.optional(),
            direction: direction.required(),
            active: active.forbidden(),
            companyId: companyId.required(),
            customerId: customerId.required(),
        }),
    },
    s_deleteOrder: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
};
