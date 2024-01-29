const joi = require('joi');
const { name, permissions, active, id } = require('./props');

module.exports = {
    s_findAllRoles: {},
    s_findOneRole: {
        params: joi.object({
            id: id.required(),
        }),
    },
    s_createRole: {
        params: joi.object({}),
        body: joi.object({
            name: name.required(),
            permissions: permissions.required(),
            active: active,
        }),
    },
    s_updateRole: {
        params: joi.object({
            id: id.required(),
        }),
        body: joi.object({
            name: name.optional(),
            permissions: permissions.optional(),
            active: joi.forbidden(),
        }),
    },
    s_deleteRole: {
        params: joi.object({
            id: id.required(),
        }),
    },
};
