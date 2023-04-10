import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field()  // --> declare @Field() decorator type for fields which we want to be readable
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  email: string;

  @Property({ required: true }) // --> properties we want to have write access to, we declare @Property which allows us to write those properties to the user
  password: string;
}

export const UserModel = getModelForClass(User); //using getModelForClass allows us to export the User class to use mongo methods on the UserModel itself ex: finding user using findById(id)