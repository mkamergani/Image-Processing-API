import express from 'express';
import routes from './routes';

const app = express();
const port = 5000;

app.use('/api', routes);

// Start The Express Server
app.listen(port, () => {
  console.log(`Server started on https://localhost:${port}`);
});

export default app;
