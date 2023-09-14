import chalk from "chalk";
import {Request} from "express";

class Logger {
    private static getTime(): string {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${chalk.bold(chalk.black(hours + ":" + minutes+ ":" + seconds))}`;
    }

    static error(description: string, message: string): void {
        console.log(`${chalk.bold(`[${chalk.red("ERROR")}]`)} [${Logger.getTime()}] ${description}`);
        console.error(message)
    }

    static info(message: string): void {
        console.log(`${chalk.bold(`[${chalk.blue("INFO")}]`)} [${Logger.getTime()}] ${message}`);
    }

    static warning(message: string): void {
        console.log(`${chalk.bold(`[${chalk.yellow("WARNING")}]`)} [${Logger.getTime()}] ${message}`);
    }

    static success(message: string): void {
        console.log(`${chalk.bold(`[${chalk.green("SUCCESS")}]`)} [${Logger.getTime()}] ${message}`);
    }

    static request(req: Request): void {
        const formattedMessage = `${chalk.bgGray("Request from")} ${chalk.bold(req.ip)} ${chalk.bold.black("(")}${chalk.bold(req.get("User-Agent"))}${chalk.bold.black(")")} ${chalk.bgGray("to")} ${chalk.bold(req.originalUrl)}`;
        console.log(`${chalk.bold(`[${chalk.cyan("REQUEST")}]`)} [${Logger.getTime()}] ${formattedMessage}`);
    }
}

export default Logger;