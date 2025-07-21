import express from 'express';
import cors from 'cors';
import config from './config/environment.js';
import Routes from './routes/index.js';
import { notFound } from './middleware/notFound.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', Routes);
app.use(notFound);

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
