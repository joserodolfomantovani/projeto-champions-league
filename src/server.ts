import createApp from './app';
import router from './routes';

const app = createApp();
const PORT = process.env.PORT

app.use("/api",router)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));