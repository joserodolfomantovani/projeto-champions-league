import { Request, Response } from 'express';

export const getPlayer = (req: Request, res: Response) => {
    return res.status(200).json({ player: 'cristiano ronaldo' });
};

