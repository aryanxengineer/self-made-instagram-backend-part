import {
  JWT_ACCESS_EXPIRES,
  JWT_ACCESS_SECRET,
  JWT_REFRESH_EXPIRES,
  JWT_REFRESH_SECRET,
} from "./env.js";

export const authConfig = {
  jwt: {
    accessSecret: JWT_ACCESS_SECRET as string,
    refreshSecret: JWT_REFRESH_SECRET as string,
    accessExpiresIn: JWT_ACCESS_EXPIRES as string,
    refreshExpiresIn: JWT_REFRESH_EXPIRES as string,
  },
  bcrypt: {
    saltRounds: 12,
  },
};
