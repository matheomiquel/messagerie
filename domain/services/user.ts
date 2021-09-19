import { UserInterface } from "..";
import jwt from "jsonwebtoken";
import { sign } from "crypto";
import { User } from "../schema";
export class UserDomain {
  private readonly userProvider: UserInterface;
  constructor({ userProvider }: { userProvider: UserInterface }) {
    this.userProvider = userProvider;
  }
  async login(
    { email, password }: {
      email: string;
      password: string;
    },
  ) {
    const user = await this.userProvider.login({ email, password });
    const token = jwt.sign({
      id: user.id,
      email: user.email,
    }, "shhhhh");
    const userWithToken = new User({ ...user, token });
    return userWithToken;
  }
  async register({ email, pseudo, password }: {
    email: string;
    pseudo: string;
    password: string;
  }): Promise<User> {
    const user = await this.userProvider.register({ email, password, pseudo });
    const token = jwt.sign({
      id: user.id,
      email: user.email,
    }, "shhhhh");
    const userWithToken = new User({ ...user, token });
    return userWithToken;
  }
}
