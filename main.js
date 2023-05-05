const express = require('express');
const app = express();
const Business = require('./models/restaurants');

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
const port = process.env.PORT || 5000;
const fs = require('fs');
const csv = require('csv-parser');
const result = [];



app.get('/',(req,res) =>{
    res.send('Running');
});



app.listen(port,() =>{
    console.log("Sd");
});

fs.createReadStream('data.csv')
.pipe(csv({}))
.on('data', (data) => result.push(data))
 .on('end',() =>{
   console.log(result);
   Business.insertMany(result)
   .then(() =>{
    console.log("inserted");
   })
   .catch((error) =>{
       console.log(error);
   })   
});



// //username=dbuser3
// //password=buT2Uv82Df8bqNz7




// const uri = "mongodb+srv://dbuser3:buT2Uv82Df8bqNz7@cluster0.fwyrt73.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function importCsvToMongoDB(){
//     try{
//         const userCollection = client.db('businessdata').collection('business');
//         fs.createReadStream('Restaurants-Data-SouthwestWashington - Restaurants-Data-SouthwestWashington.csv')
//       .pipe(csv())
//       .on('data', async (row) => {
//         // Insert each row into the MongoDB collection
//         await userCollection.insertMany(row);
//       })
//       .on('end', () => {
//         console.log('CSV file successfully processed');
//         client.close();
//       });
//     }
//      catch (err) {
//         console.error(err);
//       }
    
//     }
//     importCsvToMongoDB();
   




