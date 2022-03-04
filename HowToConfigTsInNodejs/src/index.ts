import express,{Request,Response} from 'express'

const app = express()
app.get('/',(req:Request,res:Response) => {
    const age:number = 32
    res.json({message:`Taylor Swift is a singer and she is ${age}`})
})

app.listen(5000,():void=>{
    console.log('server starts at 5000')
})