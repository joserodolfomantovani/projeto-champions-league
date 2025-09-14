import {Router} from 'express';
import { getPlayerAll, getPlayerById, postPlayer } from './controllers/players-controller';

const router = Router();

router.get("/players", getPlayerAll)
router.get("/players/:id", getPlayerById)

router.post("/players", postPlayer)

export default router;