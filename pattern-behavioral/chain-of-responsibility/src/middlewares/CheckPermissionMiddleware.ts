import DataBase from "../servers/DataBase";
import Middleware from "./Middleware";
import PermissionType from '../servers/PermissionType';

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {

    const users = DataBase.filter(item => item.email === email); 

    if (!users.length) {
      console.log("Email não cadastrado ❌");
      return false;
    }

    if (users[0].permission === PermissionType.ADMIN) {
      console.log("Você tem permissão de administrador ✅");
      return true;
    }

    console.log("Seja bem vindo usuário 🙌");
    
    return this.checkNext(email, password);
  }

}