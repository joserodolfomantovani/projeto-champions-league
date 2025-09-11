import express,{Request, Response}from 'express';
import createApp from './app';

const app = createApp();
const PORT = process.env.PORT


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));