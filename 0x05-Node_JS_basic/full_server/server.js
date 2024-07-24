import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 1245;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

export default app;
