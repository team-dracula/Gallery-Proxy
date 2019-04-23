const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(port, () => {
  console.log(`server running on port: ${port}!`);
});