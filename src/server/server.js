const express = require('express');
const path = require('path');

const fs = require('fs');
const app = express();
const cart = require('./cartRouter');//обработчик всех запросов корзины

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../dist')));

app.use(ignoreFavicon);


app.use('/apis/cart', cart);

function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
       return res.sendStatus(204);
    }
    next();
  }

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

app.get('/apis/products', (req, res) => {
    fs.readFile('src/server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

const history = require('connect-history-api-fallback');
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(express.static(path.join(__dirname, '../../dist')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));