import mongoose, { Schema } from "mongoose";
import { v1 as uuid } from "uuid";

interface User {
  id: string;
  name: string;
  age: number;
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
}, {
  methods: {
    toJSON() {
      return {
        id: this._id.toString(),
        name: this.name,
        age: this.age,
      };
    },
  },
});

const UserModel = mongoose.model<User>("User", UserSchema);

interface CreateUserDto {
  name: string;
  age: number;
}

class UpdateUserDto {
  name?: string;
  age?: number;
}

interface IUserRepositry {
  createUser(data: CreateUserDto): Promise<User | undefined>;
  updateUser(name: string, data: UpdateUserDto): Promise<User | undefined>;
  deleteUser(name: string): Promise<User | undefined>;
  getUser(name: string): Promise<User | undefined>;
  getUsers(): Promise<Array<User>>;
}

class MongoUserRepositry implements IUserRepositry {
  async createUser(data: CreateUserDto): Promise<User | undefined> {
    const user = await UserModel.create(data);
    return user;
  }

  async updateUser(
    name: string,
    data: UpdateUserDto,
  ): Promise<User | undefined> {
    const user = await UserModel.findOneAndUpdate({ name }, data, {
      new: true,
    });
    if (!user) {
      return undefined;
    }
    return user.toJSON();
  }

  async deleteUser(name: string): Promise<User | undefined> {
    const user = await UserModel.findOneAndDelete({ name });
    return user?.toJSON();
  }

  async getUser(name: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ name });
    return user?.toJSON();
  }

  async getUsers(): Promise<Array<User>> {
    const users = await UserModel.find();
    return Array.from(users, (u) => u.toJSON());
  }
}

class InMemoUserRepositry implements IUserRepositry {
  users: Array<User> = [];

  async createUser(data: CreateUserDto): Promise<User | undefined> {
    const user: User = {
      id: uuid(),
      name: data.name,
      age: data.age,
    };

    this.users.push(user);
    return new Promise((resolve) => resolve(user));
  }

  async updateUser(
    name: string,
    data: UpdateUserDto,
  ): Promise<User | undefined> {
    const user = this.users.find((u) => u.name === name);
    if (!user) {
      return undefined;
    }

    user.name = data.name || user.name;
    user.age = data.age || user.age;

    return new Promise((resolve) => resolve(user));
  }

  async deleteUser(name: string): Promise<User | undefined> {
    const user = this.users.find((u) => u.name === name);
    this.users = this.users.filter((u) => u.name !== name);
    return new Promise((resolve) => resolve(user));
  }

  async getUser(name: string): Promise<User | undefined> {
    const user = this.users.find((u) => u.name === name);
    return new Promise((resolve) => resolve(user));
  }

  async getUsers(): Promise<Array<User>> {
    return new Promise((resolve) => resolve(this.users));
  }
}

class UserService {
  private userRepositry: IUserRepositry;
  constructor(userRepositry: IUserRepositry) {
    this.userRepositry = userRepositry;
  }

  createUser(body: CreateUserDto) {
    return this.userRepositry.createUser(body);
  }

  updateUser(name: string, body: UpdateUserDto) {
    return this.userRepositry.updateUser(name, body);
  }

  deleteUser(name: string) {
    return this.userRepositry.deleteUser(name);
  }

  getUser(name: string) {
    return this.userRepositry.getUser(name);
  }

  getUsers() {
    return this.userRepositry.getUsers();
  }
}

const init = async () => {
  await mongoose.connect("mongodb://localhost:27017/ioc");
  const userRepositry = new InMemoUserRepositry();
  const userService = new UserService(userRepositry);
  await userRepositry.createUser({ name: "John", age: 20 });
  await userRepositry.createUser({ name: "Jane", age: 30 });
  await userRepositry.createUser({ name: "Jack", age: 40 });

  const users = await userService.getUser("John");
  console.log(users);
};

init();
