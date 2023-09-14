import mongoose, {ConnectOptions} from "mongoose";
import {config as dotenvConfig} from "dotenv";
import Logger from "./Utils/Logger";
import PlayerStats from "./Schemas/PlayerStats";

dotenvConfig();

const initDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(process.env.MONGODB_PW)}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_COLLECTION}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        Logger.success("Successfully connected to MongoDB")
    } catch (error) {
        Logger.error("Error connecting to MongoDB", error)
        process.exit(1);
    }
};

export default initDatabase;