const joi = require('joi');
const { companyId, id, status, bill_reference, direction, active, customerId } = require('./props');


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
            active: active,
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
            active: active,
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
