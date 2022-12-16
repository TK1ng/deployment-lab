const express = require('express');
const app = express();

app.use(express.static('public'));

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: 'c788d593b7c54385a0dc1d4e07839b3d',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/roll', (req, res) => {
    try {
        nonExistent();
        res.status(200).send(res.data);
    } catch (err) {
        res.status(400).send(err);
        console.log(err)
        rollbar.critical('This function is undefined');
    }
})


app.listen(4000, () => console.log('Listening on port 4000...'));