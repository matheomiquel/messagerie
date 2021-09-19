import { MessageDB, MessageHistoricalDB } from "../model";
import {
  Answer,
  Message,
  MessageHistorical,
  MessageInterface,
} from "../../domain";
import { MessageHistoricalAction } from "../schema";
const models = require("../../models");
export class MessageData implements MessageInterface {
  async findAll(): Promise<Message[]> {
    const messagesDB = await models.message.findAll() as MessageDB[];
    const messages = messagesDB.map(((messageDB) => new Message(messageDB)));
    return messages;
  }

  async findAllTrash(): Promise<MessageHistorical[]> {
    const messagesDB = await models.message_historical.findAll({
      where: {
        action: MessageHistoricalAction.DELETE,
      },
    }) as MessageHistoricalDB[];
    const messages = messagesDB.map((messageDB) =>
      new MessageHistorical(messageDB)
    );
    return messages;
  }

  async findById({ id }: { id: number }): Promise<Message> {
    const messageDB = await models.message.findByPk(id);
    if (!messageDB) {
      throw {
        message: "Message not found",
        code: 404,
      };
    }
    messageDB.update({ read: true });
    const message = new Message(messageDB);
    return message;
  }

  async create(
    { content, user_id }: { content: string; user_id: number },
  ): Promise<Message> {
    const messageDB = await models.message.create({
      content: content,
    }) as MessageDB;
    models.user_has_message.create({
      user_id: user_id,
      message_id: messageDB.id,
    });
    models.message_historical.create({
      content: content,
      message_id: messageDB.id,
      action: MessageHistoricalAction.CREATED,
    });
    const message = new Message(messageDB);
    return message;
  }

  async createAnswer(
    { content, id }: { content: string; id: number },
  ): Promise<Answer> {
    const firstMessage = await models.message.findByPk(id);
    if (!firstMessage) {
      throw {
        message: "Message not found",
        code: 404,
      };
    }
    const newMessage = await models.message.create({
      content: content,
      message_id: firstMessage.id,
    }) as MessageDB;
    models.message_historical.create({
      content: content,
      message_id: newMessage.id,
      action: MessageHistoricalAction.CREATED,
    });
    const messageDB = await models.message.findByPk(newMessage.id, {
      include: [{
        model: models.message,
        as: "parent",
      }],
    });
    const message = new Answer(messageDB);
    return message;
  }

  async update(
    { content, id }: { content: string; id: number },
  ): Promise<Message> {
    const odlMessage = await models.message.findByPk(id);
    if (!odlMessage) {
      throw {
        message: "Message not found",
        code: 404,
      };
    }
    const messageDB = await odlMessage.update({ content });
    models.message_historical.create({
      content: content,
      message_id: odlMessage.id,
      action: MessageHistoricalAction.UPDATED,
    });
    const message = new Message(messageDB);
    return message;
  }

  async delete(
    { id }: { id: number },
  ): Promise<Message> {
    const odlMessage = await models.message.findByPk(id);
    if (!odlMessage) {
      throw {
        message: "Message not found",
        code: 404,
      };
    }
    const messageDB = await odlMessage.destroy();
    models.message_historical.create({
      content: odlMessage.content,
      message_id: odlMessage.id,
      action: MessageHistoricalAction.DELETE,
    });
    const message = new Message(messageDB);
    return message;
  }
}
