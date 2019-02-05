import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors());

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(5000, ()=>console.log("Listening on port 5000!"));