const joi = require('joi');
const { companyId, id, name, NIT, direction, description, phone, email, active, offset, limit } = require('./props');


module.exports = {
    s_findAllProviders: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        query: joi.object({
            name: name.optional(),
            email: email.optional(),
            offset: offset.optional(),
            limit: limit.optional(),
        }),
    },
    s_findOneProvider: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createProvider: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            name: name.required(),
            description: description.optional(),
            NIT: NIT.required(),
            direction: direction.required(),
            phone: phone.required(),
            email: email.required(),
            active: active,
        }),
    },
    s_updateProvider: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            name: name.optional(),
            description: description.optional(),
            NIT: NIT.optional(),
            direction: direction.optional(),
            phone: phone.optional(),
            email: email.optional(),
            active: active,
        }),
    },
    s_deleteProvider: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
};
