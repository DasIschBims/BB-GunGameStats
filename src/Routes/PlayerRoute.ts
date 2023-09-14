import express from "express";
import PlayerStats from "../Schemas/PlayerStats";
import Logger from "../Utils/Logger";

const router = express.Router();

router.get("/:SteamID", async (req, res) => {
    try {
        const steamId = req.params["SteamID"];
        const playerData = await PlayerStats.findOne({SteamID: steamId});

        if (!playerData) {
            return res.status(404).json({message: "Player not found"});
        }

        res.json(playerData);
    } catch (error) {
        Logger.error("An Error occured on PlayerRoute", error)
        res.status(500).json({message: "Internal server error"});
    }
});

export default router;