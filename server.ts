import express, { Request, Response } from 'express';
import connection from './config/connection';


const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())

app.get("/", (req: Request, res: Response): Response => {
    return res.json({ message: "Welcome!" });
});

const start = async (): Promise<void> => {
    try {
        await connection.sync()
        app.listen(port, () => {
            console.log("Server started on port 8080");
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

void start();


