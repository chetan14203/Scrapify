const express = require('express')
const app = express();
const port = 5000;
const userRoutes = require('./routes/user.js')

const cors = require('cors');
app.use(cors());


app.use(express.json());

app.use('/',userRoutes)


app.listen(port,() => {
    console.log(`Server is live at ${port}`)
})