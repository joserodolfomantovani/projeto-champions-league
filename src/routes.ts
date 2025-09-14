import {Router} from 'express';
import { getPlayerAll, getPlayerById, postPlayer, deletePlayer, updatePlayer } from './controllers/players-controller';
import { getAllClubs } from './controllers/clubs-controller';

const router = Router();

router.get("/players", getPlayerAll)
router.post("/players", postPlayer)
router.get("/players/:id", getPlayerById)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayer)

router.get("/clubs", getAllClubs)


export default router;