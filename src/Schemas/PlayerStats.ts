import {Schema, model, Types} from "mongoose";

interface IPlayerStats {
    SteamID: string;
    Name: string;
    TotalKills: number;
    TotalDeaths: number;
    HighestStreak: number;
    TotalLevelsCleared: number;
    TotalHeadShots: number;
    TotalGamesPlayed: number;
    Banned: boolean;
    BannedUntil: string;
    _id?: Types.ObjectId;
}

const PlayerStatsSchema = new Schema<IPlayerStats>({
    SteamID: {type: String, required: true},
    Name: {type: String, required: true},
    TotalKills: {type: Number, default: 0},
    TotalDeaths: {type: Number, default: 0},
    HighestStreak: {type: Number, default: 0},
    TotalLevelsCleared: {type: Number, default: 0},
    TotalHeadShots: {type: Number, default: 0},
    TotalGamesPlayed: {type: Number, default: 0},
    Banned: {type: Boolean, default: false},
    BannedUntil: {type: String, default: "null"},
    _id: {type: Schema.Types.ObjectId, auto: true}
});

const IPlayerStats = model("PlayerStats", PlayerStatsSchema, "PlayerStats");

export default IPlayerStats;