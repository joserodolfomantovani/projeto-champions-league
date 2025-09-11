import express,{Request, Response}from 'express';

const app = express();
const PORT = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  return res.json({message: 'Hello World!'});
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));