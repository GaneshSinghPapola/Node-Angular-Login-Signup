
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import logger from './core/logger/app-logger'
// import morgan from 'morgan'
// import config from './core/config/config.dev'
// import cars from './routes/cars.route'
// import connectToDb from './db/connect'

// logger.stream = {
//     write: function(message, encoding){
//         logger.info(message);
//     }
// };

// connectToDb();

const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("dev", { "stream": logger.stream }));

// app.use('/', cars);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
    console.info('server started - ', port);
});