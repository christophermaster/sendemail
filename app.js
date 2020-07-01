import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser'
import routers from './routers/router_email'

const app = express();

const corsOptions = {
  origin: '*'
}

// Middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', cors(corsOptions), routers);

// Middleware para Vue.js router modo history

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${server.address().port}`)
})