import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready!')
// })

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke.'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke.'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is Third joke.'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is Fourth joke.'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is Fifth joke.'
        },
    ]
    res.send(jokes)
})

const port = process.env.port || 3000; // This states if there is an env file then the port will be taken from that file otherwise for fallback there is local port also being provided, but when the application goes to prod mode, than the env port takes the priority, if it's not present than the application won't run.

app.listen(port, () => {
    console.log(`App is serving at http://localhost:${port}`);
})