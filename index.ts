import express from 'express';
import dotenv from 'dotenv';
import compiler from './src/routes/compiler_routes';

const app = express();
dotenv.config();

app.use('/api/v1.0/compiler', compiler);

const PORT: number | string = process.env.PORT || 9292;

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});  