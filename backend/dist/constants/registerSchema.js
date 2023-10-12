const Joi = require('joi');
const registerSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    login: Joi.string().required(),
    name: Joi.string().required(),
    surName: Joi.string().required(),
    city: Joi.string().required(),
    age: Joi.number().required(),
    bio: Joi.string().required(),
    socialMedia: Joi.array(),
    interess: Joi.array(),
});
const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
module.exports = { registerSchema, loginSchema };
//# sourceMappingURL=registerSchema.js.map