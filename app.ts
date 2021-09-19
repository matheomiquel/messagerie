import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  MessageRoute,
  MessageService,
  UserRoute,
  UserService,
} from "./controller";
import { MessageDomain, UserDomain } from "./domain";
import { MessageData, UserData } from "./data";
const PORT = process.env.PORT || 3000;

const startLog = async function log() {
  console.log(`server lauch on port ${PORT}`);
};

export class Main {
  static async start() {
    const app = Express();
    app.use(cors());
    app.use(bodyParser.json());
    const baseRouterv1 = {
      app,
      version: "1",
    };
    //DATAS
    const messageData = new MessageData();
    const userData = new UserData();

    //DOMAINES
    const messageDomaine = new MessageDomain({
      messageProvider: messageData,
    });
    const userDomain = new UserDomain({
      userProvider: userData,
    });

    //SERVICES
    const messageService = new MessageService({ messageDomaine });
    const userService = new UserService({ userDomain });

    //ROUTES
    new MessageRoute({
      ...baseRouterv1,
      service: messageService,
      endpoint: "message",
    });

    new UserRoute({
      ...baseRouterv1,
      service: userService,
      endpoint: "user",
    });

    return app;
  }
}

Main.start().then((app) => app.listen(PORT, startLog));
