const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.get('/items', (req, res) => {
    axios.get('http://localhost:3007/items')
    .then(result => res.send(result.data))
    .catch(err => console.log(err))
})

// app.get('/items/:id', (req, res) => {
//     var id = req.params.id;
//     axios.get(`http://localhost:3007/items/${id}`)
//     .then(result => res.send(result.data))
//     .catch(err => console.log(err))
// })

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});