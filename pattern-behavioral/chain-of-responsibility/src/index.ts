// Chain of Res­pon­si­bi­lity

// É um pa­drão de pro­jeto com­por­ta­men­tal que per­mite que você passe pe­di­dos 
// por uma cor­rente de han­dlers. Ao re­ce­ber um pe­dido, cada han­dler de­cide 
// se pro­cessa o pe­dido ou o passa adi­ante para o pró­ximo han­dler na corrente.

import * as readline from "readline";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import Server from "./servers/Server";

declare var process

const server = new Server();

const setPromptQuestioins = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Email: ", (email: string) => {
    rl.question("Password: ", (password: string) => {
      server.logIn(email, password);
      rl.close();
    } );
  });

  rl.on("close", setPromptQuestioins);
}

const middleware = new CheckPermissionMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);

setPromptQuestioins();