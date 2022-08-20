// lsp - liskov substitution principle

// Quando es­ten­dendo uma classe, lem­bre-se que você deve ser capaz de pas­sar 
// ob­je­tos da sub­classe em lugar de ob­je­tos da classe mãe sem que­brar o có­digo cliente.

// Abstração: uma subclasse fusca não pode perder a funcionalidade dirigir ao
// herdar da classe pai carro que possui a funcionalidade dirigir.

// Abstração:  um cartão de crédito não pode perder a 
// funcionalidade de cartão de crédito independente de ser do provedor


import Credit from "./Payment/Credit";
import Debit from "./Payment/Debit";
import Rewards from "./Payment/Rewards";

// const card = new Credit();
// const card = new Debit();
const card = new Rewards();

card.validate();
card.collectPayment();