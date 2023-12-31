const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const email = joi.string().email();
const phone = joi.string().min(10).max(15).unique();


module.exports = {
    s_findAllUsers: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneUser: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createUser: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            email: email.required(),
            password: stringRequired,
            name: stringRequired,
            last_name: stringRequired,
            phone: phone.required(),
            active: joi.forbidden(),
        }),
    },
    s_updateUser: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            email: email,
            password: stringOptional,
            name: stringOptional,
            last_name: stringOptional,
            phone: phone,
            active: joi.forbidden(),
        }),
    },
    s_deleteUser: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};