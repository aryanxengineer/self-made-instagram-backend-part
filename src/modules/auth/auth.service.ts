export class AuthService {
  constructor() {}


  async signUp(data: any) {
    // 1. validate input
    // 2. hash password
    // 3. create user
    // 4. return response

    return {
      message: "User signed up (placeholder)",
    };
  }

  async signIn(data: any) {
    // 1. find user
    // 2. verify password
    // 3. generate tokens
    // 4. return auth response

    return {
      message: "User logged in (placeholder)",
    };
  }

  async signOut(user: any) {
    // 1. invalidate refresh token
    // 2. clear cookies/session

    return {
      message: "User logged out (placeholder)",
    };
  }

}
