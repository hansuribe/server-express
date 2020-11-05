const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || '8080';
API_URL = 'https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan';

app.listen(port, () => console.log(`Server is running on port ${port}`));

test = {
    "laanebelop": 500,
    "nominellRente": 5,
    "terminGebyr": 0,
    "utlopsDato": "2020-06-01",
    "saldoDato": "2020-01-01",
    "datoForsteInnbetaling": "2020-02-01",
    "ukjentVerdi": "TERMINBELOP"
}

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});
