// SRP - Single Responsibility Principle
// Uma classe deve ter ape­nas uma razão para mudar.

import Client from "./Client";
import Notify from "./Notify";

const clientUser = new Client();
const notifyUser = new Notify(clientUser);

notifyUser.sendEmail();
notifyUser.sendSms();