import {config as dotenvConfig} from "dotenv";
import initDatabase from "./Database";
import initExpress from "./Express";
import Logger from "./Utils/Logger";


dotenvConfig();

const init = async (): Promise<void> => {
    try {
        await initDatabase();
        initExpress();
    } catch (error) {
        Logger.error("An error occurred during initialization", error)
        process.exit(1);
    }
};

init().then(r => r);