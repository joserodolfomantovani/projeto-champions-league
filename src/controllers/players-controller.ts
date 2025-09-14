import { Request, Response } from 'express';
import { getPlayerByIdService, getPlayerService } from '../services/players-services';

export const getPlayerAll = async (req: Request, res: Response) => {
    const httpResponse = await getPlayerService();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const  id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
}
