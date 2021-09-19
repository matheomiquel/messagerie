import { Express } from "express";
import { MessageService } from "../services";
import { createValidator } from "express-joi-validation";
import { verifyToken } from "..";
import {
  CreateMessageBodySchema,
  DeleteMessageParametersSchema,
  UpdateMessageBodySchema,
  UpdateMessageParametersSchema,
} from "../schemas";
const validator = createValidator();
export class MessageRoute {
  constructor({ version, app, service, endpoint }: {
    version: string;
    app: Express;
    service: MessageService;
    endpoint: string;
  }) {
    app.get(
      `/${version}/${endpoint}`,
      service.findAll.bind({ ...service }),
    );
    app.get(
      `/${version}/${endpoint}/trash`,
      service.findAllTrash.bind({ ...service }),
    );
    app.get(
      `/${version}/${endpoint}/:id`,
      service.findById.bind({ ...service }),
    );
    app.post(
      `/${version}/${endpoint}`,
      validator.body(CreateMessageBodySchema),
      verifyToken,
      service.create.bind({ ...service }),
    );
    app.post(
      `/${version}/${endpoint}/:id`,
      validator.body(CreateMessageBodySchema),
      service.createAnswer.bind({ ...service }),
    );

    app.put(
      `/${version}/${endpoint}/:id`,
      validator.body(UpdateMessageBodySchema),
      validator.params(UpdateMessageParametersSchema),
      service.update.bind({ ...service }),
    );
    app.delete(
      `/${version}/${endpoint}/:id`,
      validator.params(DeleteMessageParametersSchema),
      service.delete.bind({ ...service }),
    );
  }
}
