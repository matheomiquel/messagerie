import { Request, Response } from "express";
import { UserDomain } from "../../domain";
import bcrypt from "bcrypt";
type error = {
  status: number;
  message: string;
};
export class UserService {
  private readonly userDomain: UserDomain;
  constructor({ userDomain }: { userDomain: UserDomain }) {
    this.userDomain = userDomain;
  }
  async login(req: Request, res: Response): Promise<Response> {
    try {
      //      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const messages = await this.userDomain.login({ ...req.body });
      return res.status(200).json(messages);
    } catch (e) {
      const err = await e as error;
      return res.status(err.status).json(err.message);
    }
  }
  async register(req: Request, res: Response): Promise<Response | error> {
    try {
      //      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const messages = await this.userDomain.register({ ...req.body });
      return res.status(200).json(messages);
    } catch (e) {
      const err = await e as error;
      return res.status(err.status).json(err.message);
    }
  }
}
