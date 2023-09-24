import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class User {

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  _id: string;

  @Prop(
    {
      required: true,
    },
  )
  name: string;

  @Prop({
    required: true,
  })
  age: number;

  @Prop({
    required: true,
    enum: ["admin", "user"],
    default: "user",
  })
  role: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
