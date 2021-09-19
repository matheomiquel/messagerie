import Joi from "joi";
const CreateMessageBodySchema = Joi.object({
  content: Joi.string().required(),
});

export { CreateMessageBodySchema };
