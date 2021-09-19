import Joi from "joi";
const CreateRegisterBodySchema = Joi.object({
  email: Joi.string().required(),
  pseudo: Joi.string().required(),
  password: Joi.string().required().min(4),
});

export { CreateRegisterBodySchema };
