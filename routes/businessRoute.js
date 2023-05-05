const express = require('express');
const app = express();

const multer = require('multer');
const path = require('path');
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname,'public')));


const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
          cb(null,'../public/uploads')
    },
    filename:(req,file,cb) =>{
         cb(null,file.originalname)
    }
});

const upload = multer({ storage:storage });
const userController = require('../controllers/userController');

app.post('/importBusiness',upload.single('file'),userController.importBusiness)
module.exports = app;
