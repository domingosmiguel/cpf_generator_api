import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import cnpjRoutes from './routes/cnpjRoutes.js';
import cpfRoutes from './routes/cpfRoutes.js';

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.use(cpfRoutes);
server.use(cnpjRoutes);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
