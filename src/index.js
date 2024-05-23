import express from 'express';
import corsMiddleware from './middlewares/corsMiddleware.js';
import userRouter from './routers/userRouter.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import cache from './utils/cache.js';
import connectDB from './utils/dataBaseConnector.js';

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/api/users', userRouter);


app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}`);
  await connectDB();
  await cache.loadCacheFromDB();
});
