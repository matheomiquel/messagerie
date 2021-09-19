import { Answer, Message, MessageHistorical } from "../schema";
export interface MessageInterface {
  findAll(): Promise<Message[]>;
  findAllTrash(): Promise<MessageHistorical[]>;
  findById({ id }: { id: number }): Promise<Message>;
  create(
    { content, user_id }: { content: string; user_id: number },
  ): Promise<Message>;
  createAnswer(
    { content, id }: { content: string; id: number },
  ): Promise<Answer>;
  update({ content, id }: { content: string; id: number }): Promise<Message>;
  delete({ id }: { id: number }): Promise<Message>;
}
