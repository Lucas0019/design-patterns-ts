import DataBase from '../servers/DataBase';
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {

    if (email.indexOf("@") === -1) {
      console.log("Email inválido ❌");
      return false;
    }

    if (!DataBase.filter(item => item.email === email && item.password === password).length) {
      console.log("Email ou Usuário não inválido ❌");
      return false;
    }
  

    return this.checkNext(email, password);
  }
  
}