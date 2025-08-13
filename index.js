const app=require('./app');
const db=require('./config/db');
const UserModel=require('./model/user.model');
const DataModel=require('./model/data.model');


const port=3000;

app.listen(port,()=>{
console.log(`Server listening on port http://localhost:${port}`);
});