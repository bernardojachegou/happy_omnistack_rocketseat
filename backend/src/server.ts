import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

// // Leading with dotenv-safe;
// require("dotenv-safe").config();

const app = express();
// Cors used to allow any frontend to use the API;
app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => console.log('Server started at http://localhost:3000'));