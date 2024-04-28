import ConnectDB from "./db/index.js";
import express from 'express';
import cors from 'cors'
import  bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter,.js";
import queryRoutes from "./router/queryRouter.js";
import attendanceRoutes from "./router/attendanceRoutes.js";

const app = express();
// dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/user',userRouter)
app.use('/api/queries', queryRoutes);
app.use('/api/attendance', attendanceRoutes);

ConnectDB().then(() => {
   app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });
}).catch(()=>{
    console.log("Server is not running");
})