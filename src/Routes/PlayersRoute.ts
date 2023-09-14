import PlayerStats from "../Schemas/PlayerStats";
import express from "express";
import Logger from "../Utils/Logger";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const players = await PlayerStats.find();

        res.json(players);
    } catch (error) {
        Logger.error("An Error occured on PlayerRoutes", error)
        res.status(500).json({message: "Internal server error"});
    }
});

export default router;