import bcrypt from "bcrypt";
import { UserModel } from "@/modules/user/user.model.js";
import { ConflictError } from "@/common/errors/conflict.error.js";
import { InternalServerError } from "@/common/errors/internal.error.js";
import { logger } from "@/logger/index.js";

export class AuthService {
  // Default constructor
  constructor() {}

  async signUp(data: any) {
    // Check existing user
    const exists = await UserModel.findOne({
      email: data.email,
    }).lean();

    if (exists) {
      if (exists.email === data.email) {
        throw new ConflictError("Email already exists");
      }
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    let user;
    try {
      user = await UserModel.create({
        fullname: data.fullname,
        username: data.username,
        email: data.email,
        password: hashedPassword,
        phoneNumber: data.phoneNumber,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        profilePicture: data.profilePicture,
      });

    } catch (err: any) {
      if (err.code === 11000) {
        throw new ConflictError("User already exists");
      }

      throw new InternalServerError();
    }

    return {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
    };
  }
}
