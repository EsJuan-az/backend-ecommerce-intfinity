const joi = require('joi');

const id = joi.number().integer();
const stringRequired = joi.string().required();
const stringOptional = joi.string().allow(null, '');

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
            URL: stringRequired,
            alternative_text: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_updateImage: {
        params: joi.object({
            id: id.required(),
        }),
        body: joi.object({
            URL: stringOptional,
            alternative_text: stringOptional,
            active: joi.forbidden(),
        }),
    },
    s_deleteImage: {
        params: joi.object({
            id: id.required(),
        }),
    },
};
