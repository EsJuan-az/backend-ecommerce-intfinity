const joi = require('joi');
const { companyId, id, name, color, size, brand, price, refer_id, active, categoryId, providerId, offset, limit } = require('./props');

module.exports = {
    s_findAllProducts: {
        params: joi.object({
            company_id: companyId.required(),
        }),
        query: joi.object({
            name: name.optional(),
            color: color.optional(),
            size: size.optional(),
            brand: brand.optional(),
            price: price.optional(),
            refer_id: refer_id.optional(),
            categoryId: categoryId.optional(),
            providerId: providerId.optional(),
            offset:  offset.optional(),
            limit: limit.optional(),
        }),
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
            active: active,
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
            active: active,
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
