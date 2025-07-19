import mongoose from "mongoose";

const dbConnection=()=>{
    mongoose.connect(process.env.DB_CONNECTION)
    .then(()=>console.log('databas is connected....'))
    .catch((err)=>console.log('databas failed '+err))
}
export default dbConnection