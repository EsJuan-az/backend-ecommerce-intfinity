const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const enumPermissions = joi.string().valid('A', 'B', 'C', 'D', 'Z').required();

module.exports = {
    s_findAllRoles: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneRole: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createRole: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            name: stringRequired,
            permissions: enumPermissions,
            active: joi.forbidden(),
        }),
    },
    s_updateRole: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            name: stringRequired,
            permissions: enumPermissions,
            active: joi.forbidden(),
        }),
    },
    s_deleteRole: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
