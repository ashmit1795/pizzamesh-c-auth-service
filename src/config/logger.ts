import winston from "winston";
import { Env } from "./env.ts";

const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
        serviceName: "auth-service",
    },
    transports: [
        new winston.transports.File({
            dirname: "logs",
            filename: "combined.log",
            level: "info",
            silent: Env.NODE_ENV === "test",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.prettyPrint(),
            ),
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error",
            silent: Env.NODE_ENV === "test",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.prettyPrint(),
            ),
        }),
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.prettyPrint(),
                winston.format.colorize({ all: true }),
            ),
            silent: Env.NODE_ENV === "test",
        }),
    ],
});

export default logger;
