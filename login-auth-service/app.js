const express = require('express');
const userRouter = require('./routers/user')
const PORT = process.env.PORT
require('./db/db')

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})