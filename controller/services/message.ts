import { Request, Response } from "express";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { MessageDomain, User, UserToken } from "../../domain";
type error = {
  status: number;
  message: string;
};
export class MessageService {
  private readonly messageDomaine: MessageDomain;
  constructor({ messageDomaine }: { messageDomaine: MessageDomain }) {
    this.messageDomaine = messageDomaine;
  }
  async findAll(req: Request, res: Response): Promise<Response> {
    const messages = await this.messageDomaine.findAll();
    return res.status(200).json(messages);
  }
  async findById(req: Request, res: Response): Promise<Response | error> {
    try {
      const messages = await this.messageDomaine.findById({
        id: Number(req.params.id),
      });
      return res.status(200).json(messages);
    } catch (e) {
      const err = await e as error;
      return res.status(err.status).json(err.message);
    }
  }

  async findAllTrash(req: Request, res: Response): Promise<Response> {
    const messages = await this.messageDomaine.findAllTrash();
    return res.status(200).json(messages);
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      //const decode = jwt_decode<JwtPayload>(req.headers["authorization"]);
      req.get("authorization");
      //    const user_id = decode.id;
      const messages = await this.messageDomaine.create({
        ...req.body,
        user_id: 4,
      });
      return res.status(200).json(messages);
    } catch (e) {
      return res.status(500).json("error");
    }
  }
  async createAnswer(req: Request, res: Response): Promise<Response | error> {
    try {
      const messages = await this.messageDomaine.createAnswer({
        ...req.body,
        ...req.params,
      });
      return res.status(200).json(messages);
    } catch (e) {
      const err = await e as error;
      return res.status(err.status).json(err.message);
    }
  }
  async update(req: Request, res: Response): Promise<void> {
    try {
      const messages = await this.messageDomaine.update({
        ...req.body,
        ...req.params,
      });
      res.status(200).json(messages);
    } catch (e) {
      const err = await e as error;
      res.status(err.status).json(err.message);
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const messages = await this.messageDomaine.delete({
        id: Number(req.params.id),
      });
      res.status(200).json(messages);
    } catch (e) {
      const err = await e as error;
      res.status(err.status).json(err.message);
    }
  }
}
