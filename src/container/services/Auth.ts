import { User } from "../../model/Model";

export default class AuthService{
  public async login(userName:string,password:string):Promise<User | undefined> {   
    if (userName === "user" && password === "1234") {
      return{
          userName:userName,
          email:"Johan@mail.com",
      }
    } else {
        return undefined;
    }
  }
};