import { Express } from "express";
import { UserService } from "../services";
import { createValidator } from "express-joi-validation";
import { CreateLoginBodySchema, CreateRegisterBodySchema } from "../schemas";
const validator = createValidator();
export class UserRoute {
  constructor({ version, app, service, endpoint }: {
    version: string;
    app: Express;
    service: UserService;
    endpoint: string;
  }) {
    app.post(
      `/${version}/${endpoint}/login`,
      validator.body(CreateLoginBodySchema),
      service.login.bind({ ...service }),
    );
    app.post(
      `/${version}/${endpoint}/register`,
      validator.body(CreateRegisterBodySchema),
      service.register.bind({ ...service }),
    );
  }
}
