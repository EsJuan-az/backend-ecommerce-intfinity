const joi = require('joi');
const { id, email, password, name, last_name, phone, branchId, roleId, active, companyId, limit, offset } = require('./props');
module.exports = {
    s_findAllUsers: {
        params: joi.object({}),
        query: joi.object({
            offset: offset.optional(),
            limit: limit.optional(),
            companyId: companyId.optional(),
            email: email.optional(),
            name: name.optional(),
            last_name: last_name.optional(),
            branchId: branchId.optional(),
            roleId: roleId.optional(),
        }),
    },
    s_findOneUser: {
        params: joi.object({
            id: id.required(),
        }),
    },
    s_createUser: {
        body: joi.object({
            companyId: companyId.required(),
            email: email.required(),
            password: password.required(),
            name: name.required(),
            last_name: last_name.required(),
            phone: phone.required(),
            branchId: branchId.required(),
            roleId: roleId.required(),
            active: active,
        }),
    },
    s_updateUser: {
        params: joi.object({
            id: id.required(),
        }),
        body: joi.object({
            companyId: companyId.forbidden(),
            email: email.optional(),
            password: password.optional(),
            name: name.optional(),
            last_name: last_name.optional(),
            phone: phone.optional(),
            branchId: branchId.optional(),
            roleId: roleId.optional(),
            active: active,
        }),
    },
    s_deleteUser: {
        params: joi.object({
            id: id.required(),
        }),
    },
    s_loginUser: {
        body: joi.object({
            email: email.required(),
            password: password.required(),
        }),
    },
};