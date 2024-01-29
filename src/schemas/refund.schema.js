const joi = require('joi');
const { companyId, id, customer_email, type, reason, refund_number, branchId, userId, purchaseId, active } = require('./props');



module.exports = {
    s_findAllRefunds: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        query: joi.object({}),
    },
    s_findOneRefund: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createRefund: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            customer_email: customer_email.optional(),
            type: type.required(),
            reason: reason.required(),
            refund_number: refund_number.optional(),
            branchId: branchId.required(),
            userId: userId.required(),
            purchaseId: purchaseId.optional(),
            active: active,
        }),
    },
    s_updateRefund: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            customer_email: customer_email.optional(),
            type: type.optional(),
            reason: reason.optional(),
            refund_number: refund_number.optional(),
            branchId: branchId.optional(),
            userId: userId.optional(),
            purchaseId: purchaseId.optional(),
            active: active,
        }),
    },
    s_deleteRefund: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
};
