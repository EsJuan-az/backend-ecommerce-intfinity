const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');
const floatRequired = joi.number().required();
const floatOptional = joi.number().allow(null);

module.exports = {
    s_findAllProducts: {
        params: joi.object({
            company_id: id.required(),
        }),
        query: joi.object({}),
    },
    s_findOneProduct: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
    s_createProduct: {
        params: joi.object({
            company_id: id.required(),
        }),
        body: joi.object({
            name: stringRequired,
            color: stringOptional,
            size: stringOptional,
            brand: stringOptional,
            price: floatRequired,
            refer_id: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_updateProduct: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
        body: joi.object({
            name: stringOptional,
            color: stringOptional,
            size: stringOptional,
            brand: stringOptional,
            price: floatOptional,
            refer_id: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deleteProduct: {
        params: joi.object({
            company_id: id.required(),
            id: id.required(),
        }),
    },
};
