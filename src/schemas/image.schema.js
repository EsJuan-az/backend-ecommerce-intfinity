const joi = require('joi');
const { id, alternative_text, productId, companyId, categoryId, userId, URL, offset, limit } = require('./props');

module.exports = {
    s_findAllImages: {
        params: joi.object({}),
        query: joi.object({
            alternative_text: alternative_text.optional(),
            productId: productId.optional(),
            companyId: companyId.optional(),
            categoryId: categoryId.optional(),
            userId: userId.optional(),
            offset: offset.optional(),
            limit: limit.optional(),
        }),
    },
    s_findOneImage: {
        params: joi.object({
            id: id.required(),
        }),
    },
    s_createImage: {
        params: joi.object({}),
        body: joi.object({
            id: id.forbidden(),
            URL: URL.required(),
            alternative_text: alternative_text.optional(),
            productId: productId.optional(),
            companyId: companyId.optional(),
            categoryId: categoryId.optional(),
            userId: userId.optional(),
        }),
    },
    s_updateImage: {
        params: joi.object({
            id: id.required(),
        }),
        body: joi.object({
            id: id.forbidden(),
            URL: URL.optional(),
            alternative_text: alternative_text.optional(),
            productId: productId.optional(),
            companyId: companyId.optional(),
            categoryId: categoryId.optional(),
            userId: userId.optional(),
        }),
    },
    s_deleteImage: {
        params: joi.object({
            id: id.required(),
        }),
    },
};
