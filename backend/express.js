import service from './app.js';
import express from 'express';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const app = express();


app.use(cors({
    origin: 'http://localhost:3001',
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())


//Routes
const router = express.Router();

router.route("/addUser").post(
    async (req, res, next) => {
        try {
            await service.changeContract.addUser( {
                    user: req.body.user,
                    amount: Number.parseInt(req.body.amount)
                }
            );
            return res.status(200).json({message: "User successfully created!"});
        } catch (err) {
            console.log(err);
            return res.status(404).json({message: err});
        }
    }
)

router.route("/removeUser").delete(
    async (req, res, next) => {
        try {
            await service.changeContract.removeUser(
                {
                    user: req.body.user
                }
            );
            return res.status(200).json({message: "User successfully deleted!"});
        } catch (err) {
            console.log(err);
            return res.status(404).json({message: err});
        }
    }
);
router.route("/increaseUser").put(
    async (req, res, next) => {
        try {
            await service.changeContract.increaseUser(
                {
                    user: req.body.user,
                    amount: Number.parseInt(req.body.amount)
                }
            );
            return res.status(200).json({message: "User balance altered!"});
        } catch (err) {
            console.log(err);
            return res.status(404).json({message: err});
        }
    }
);
router.route("/viewUser").post(
    async (req, res, next) => {
        try {
            
            return res.status(200).json({message: await service.viewContract.viewUser({
                user: req.body.user
            })});
        } catch (err) {
            console.log(err);
            return res.status(404).json({message: err});
        }
    }
);
router.route("/withdraw").put(
    async (req, res, next) => {
        try {
            await service.viewContract.withdrawUser(
                {
                    user: req.body.user,
                    amount: Number.parseInt(req.body.amount)
                }
            );
            return res.status(200).json({message: "Value successfully removed!"});
        } catch (err) {
            console.log(err);
            return res.status(404).json({message: err});
        }
    }
);
router.route("/getAllUsers").get(
    async (req, res, next) => {
        try {
            return res.status(200).json(await service.viewContract.getAllUsers());
        } catch (err) {
            console.log(err);
            return res.status(404).json({message: err});
        }
    }
);

app.use('/', router);


app.listen(2999,
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Server started!");
    }
);