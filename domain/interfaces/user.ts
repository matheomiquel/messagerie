import { User } from "..";
export interface UserInterface {
  findById({ id }: { id: number }): Promise<User>;
  register(
    { pseudo, email, password }: {
      pseudo: string;
      email: string;
      password: string;
    },
  ): Promise<User>;
  login(
    { email, password }: { email: string; password: string },
  ): Promise<User>;
}
