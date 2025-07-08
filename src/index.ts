import express, { type Request, type Response } from 'express';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT ?? 3000;

// Basic example route
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello world!' });
});

// Start the server only when this file is executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
