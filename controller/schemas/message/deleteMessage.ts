import Joi from "joi";
import { ValidatedRequestSchema } from "express-joi-validation";
import { ContainerTypes } from "express-joi-validation";

const DeleteMessageParametersSchema = Joi.object({
  id: Joi.number().required(),
});

export { DeleteMessageParametersSchema };
