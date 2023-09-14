import express from "express";
import rateLimit from "express-rate-limit";
import PlayersRoute from "./Routes/PlayersRoute";
import PlayerRoute from "./Routes/PlayerRoute";
import Logger from "./Utils/Logger";
import MiddlewareLogger from "./Middleware/MiddlewareLogger";

const initExpress = (): void => {
    const app = express();
    const port = process.env.PORT || 3000;
    const apiBase = "/api/"

    const limiter = rateLimit({
        windowMs: 60 * 1000, // 1 minute
        limit: 120,
    });
    app.use(limiter);

    app.use(express.json());
    app.use(MiddlewareLogger);

    app.use(apiBase + "players", PlayersRoute);
    app.use(apiBase + "player", PlayerRoute);

    app.listen(port, () => {
        Logger.success(`Server is listening on port ${port}`)
    });
};

export default initExpress;