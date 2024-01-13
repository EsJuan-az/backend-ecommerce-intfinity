const joi = require('joi');

const id = joi.number().integer().min(1);
const URL = joi.string().uri();
const alternative_text = joi.string();
const productId = joi.number().integer().min(1);
const categoryId = joi.number().integer().min(1);
const userId = joi.number().integer().min(1);
const companyId = joi.number().integer().min(1);



module.exports = {
    s_findAllImages: {
        params: joi.object({}),
        query: joi.object({}),
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
