const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}!`);
});