import {Router} from 'express';
import { getPlayerAll, getPlayerById } from './controllers/players-controller';

const router = Router();

router.get("/players", getPlayerAll)
router.get("/players/:id", getPlayerById)

export default router;