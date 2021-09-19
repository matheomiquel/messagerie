import Joi from "joi";
const CreateLoginBodySchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required().min(4),
});

export { CreateLoginBodySchema };
