import {Router} from 'express';
import { getPlayerAll, getPlayerById, postPlayer, deletePlayer } from './controllers/players-controller';

const router = Router();

router.get("/players", getPlayerAll)
router.get("/players/:id", getPlayerById)

router.post("/players", postPlayer)
router.delete("/players/:id", deletePlayer)

export default router;