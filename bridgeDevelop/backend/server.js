import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!')
})

const port = process.env.port || 3000; // This states if there is an env file then the port will be taken from that file otherwise for fallback there is local port also being provided, but when the application goes to prod mode, than the env port takes the priority, if it's not present than the application won't run.