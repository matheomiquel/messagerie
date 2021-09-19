import { User, UserInterface } from "../../domain";
import { UserDB } from "../model";
const models = require("../../models");
export class UserData implements UserInterface {
  async findById({ id }: { id: number }): Promise<User> {
    const userDb = await models.user.findByPk(id);
    userDb.update({ read: true });
    const user = new User(userDb);
    return user;
  }
  async register(
    { pseudo, email, password }: {
      pseudo: string;
      email: string;
      password: string;
    },
  ): Promise<User> {
    try {
      const userDb = await models.user.create({
        pseudo,
        email,
        password,
      });
      const user = new User(userDb);
      return user;
    } catch (e) {
      throw {
        status: 409,
        message: "l'email ou le pseudo est déjà pris",
      };
    }
  }
  async login(
    { email, password }: { email: string; password: string },
  ): Promise<User> {
    const userDb = await models.user.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    if (!userDb) {
      throw {
        status: 404,
        message:
          "La combinaison d'email et de mot de passe n'a pas été retrouvé",
      };
    }
    const user = new User(userDb);
    return user;
  }
}
