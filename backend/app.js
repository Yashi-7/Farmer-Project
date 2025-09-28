require('dotenv').config();
const express= require('express');
const app = express();
const userRouter = require('./routes/user.routes')
const connectToDb = require('./config/db')
const cookieParser = require('cookie-parser')

connectToDb();



app.set("view engine" , 'ejs')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', userRouter  )

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});