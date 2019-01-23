import express from 'express';
const app = express();
app.get('/', (_, res) => res.send('Hello World 3!'));

export default app;
