import express from 'express';
import db from './models'

const app = express();
const port = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server is running!")

    })
})


