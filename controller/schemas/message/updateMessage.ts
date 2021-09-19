import Joi from "joi";
const UpdateMessageBodySchema = Joi.object({
  content: Joi.string().required(),
});

const UpdateMessageParametersSchema = Joi.object({
  id: Joi.number().required(),
});

export { UpdateMessageBodySchema, UpdateMessageParametersSchema };
