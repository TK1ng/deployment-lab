const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});


app.listen(4000, () => console.log('Listening on port 4000...'));