const joi = require('joi');

const id = joi.number().integer().min(1);
const companyId = joi.number().integer().min(1);
const name = joi.string();
const color = joi.string();
const size = joi.string();
const brand = joi.string();
const price = joi.number().float();
const refer_id = joi.string();
const active = joi.boolean();
const categoryId = joi.number().integer().min(1);
const providerId = joi.number().integer().min(1);



module.exports = {
    s_findAllProducts: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        query: joi.object({}),
    },
    s_findOneProduct: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
    s_createProduct: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            name: name.required(),
            color: color.optional(),
            size: size.optional(),
            brand: brand.optional(),
            price: price.required(),
            refer_id: refer_id.optional(),
            active: active.forbidden(),
            companyId: companyId.required(),
            categoryId: categoryId.required(),
            providerId: providerId.required(),
        }),
    },
    s_updateProduct: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            name: name.optional(),
            color: color.optional(),
            size: size.optional(),
            brand: brand.optional(),
            price: price.optional(),
            refer_id: refer_id.optional(),
            active: active.forbidden(),
            companyId: companyId.optional(),
            categoryId: categoryId.optional(),
            providerId: providerId.optional(),
        }),
    },
    s_deleteProduct: {
        params: joi.object({
            company_id: companyId.required(),
            id: id.required(),
        }),
    },
};
