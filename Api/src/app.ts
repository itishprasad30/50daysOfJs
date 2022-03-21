import express ,{Request,Response}from 'express';
import mysql from 'mysql'


const app = express()
const connetionString = process.env.DATABASE_URL || '';
const connection = mysql.createConnection(connetionString);

connection.connect()

const PORT = process.env.PORT || 3000
app.get('/api/characters',(req:Request,res:Response)=> {
    const query = 'SELECT * FROM Characters ';
    connection.query(query,(err,rows)=>{
        if (err) throw err;
        const retVal = {
            data:rows,
            message:rows.length === 0 ?'No Rocord Found' : null
        }

        return res.send(rows)
    })

})
app.get('/api/characters/:id',(req:Request,res:Response)=> {
    const id = req.params.id
      const query = `SELECT * FROM Characters WHERE ID ="${id}" LIMIT 1 `;
    connection.query(query,(err,rows)=>{
        if (err) throw err;
        const retVal = {
            data:rows.length > 0 ? rows[0] : null,
            
            message:rows.length === 0 ?'No Rocord Found' : 'Success'
        }

        return res.send(retVal)
    })
   


})

app.listen(PORT,()=>{
    console.log('App Is running on port '+PORT)
})