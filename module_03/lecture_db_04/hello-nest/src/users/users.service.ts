import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userModel.create(createUserDto);
    return user;
  }

  findAll(): Promise<User[]> {
    const users = this.userModel.find();
    return users;
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return updatedUser;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  login(email: string, password: string): Promise<User> {
    return this.userModel.findOne({
      email: email,
      password: password,
    });
  }
}
