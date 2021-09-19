import { MessageInterface } from "..";
import { Answer, Message, MessageHistorical } from "../schema";
export class MessageDomain {
  private readonly messageProvider: MessageInterface;
  constructor({ messageProvider }: { messageProvider: MessageInterface }) {
    this.messageProvider = messageProvider;
  }
  async findAll(): Promise<Message[]> {
    return this.messageProvider.findAll();
  }
  async findAllTrash(): Promise<MessageHistorical[]> {
    return this.messageProvider.findAllTrash();
  }
  async findById({ id }: { id: number }): Promise<Message> {
    return this.messageProvider.findById({ id });
  }
  async create(
    { content, user_id }: { content: string; user_id: number },
  ): Promise<Message> {
    return this.messageProvider.create({ content, user_id });
  }
  async createAnswer(
    { content, id }: { content: string; id: number },
  ): Promise<Message> {
    return this.messageProvider.createAnswer({ content, id });
  }
  async update(
    { content, id }: { content: string; id: number },
  ): Promise<Message> {
    return this.messageProvider.update({ content, id });
  }
  async delete({ id }: { id: number }): Promise<Message> {
    return this.messageProvider.delete({ id });
  }
}
