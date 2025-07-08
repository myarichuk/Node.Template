import express from 'express';

const app = express();
const port = process.env.PORT ?? 3000;

// Basic example route
app.get('/', (_req, res) => {
  res.json({ message: 'Hello world!' });
});

if (import.meta.main) {
  // Start the server only when this file is executed directly
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
