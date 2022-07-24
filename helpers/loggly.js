import winston from "winston";
import { Loggly } from "winston-loggly-bulk";

let loggerInstance = null;

async function createLoggerInstance() {
  winston.add(
    new Loggly({
      token: "e00cb3b1-2adc-4c28-b2a5-723fa4853575",
      subdomain: "krafzik",
      tags: ["Winston-NodeJS"],
      json: true,
    })
  );
  return winston;
}

export default async function createLog(name, data) {
  if (!loggerInstance) loggerInstance = await createLoggerInstance();
  await loggerInstance.log(name, data);
}
