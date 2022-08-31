// O Adap­ter é um pa­drão de pro­jeto es­tru­tu­ral que per­mite ob­je­tos 
// com in­ter­fa­ces in­com­pa­tí­veis co­la­bo­ra­rem entre si.

// seria basicamente como usar uma tomada com padrão brasileiro
// num plug para uma tomada americano

import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayments from "./payonner/IPayonnerPayments";
import Payonner from "./payonner/Payonner";
import IPayPalPayments from "./paypal/IPayPalPayments";
import PayPal from "./paypal/PayPal";


const payment: IPayPalPayments = new PayonnerAdapter(new Payonner());
//const payment: IPayPalPayments = new PayPal();

payment.paypalPayment();
payment.paypalReceive();

