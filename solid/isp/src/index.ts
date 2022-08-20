// isp - interface segregation principle
// Cli­en­tes não devem ser for­ça­dos a de­pen­der de mé­to­dos que não usam.
//Nem todos os cli­en­tes podem sa­tis­fa­zer os re­que­ri­men­tos de uma in­ter­face inchada.

import Amazon from './servers/Amazon';
import Dropbox from "./servers/Dropbox";

const amazon = new Amazon('https://amazon.com.br', 198, 'idamazonman')
const dropbox = new Dropbox('https://dropbox.com.br', 198, 'iddropboxman')