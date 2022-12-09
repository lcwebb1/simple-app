const express=require('express')
const bodyparser=require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/',(req,res)=>{
    const n1=Number(req.body.x)
    console.log(n1)
    const n2=Number(req.body.y)
    console.log(n2)
    const calc=req.body.calc_type
    if (calc == "SUBTRACTION"){
        const output=n1-n2
        res.send('The difference is ' + output)
    }
    if (calc == "MULTIPLY"){
        const output=n1*n2
        res.send('The product is ' + output)
    }
    if (calc == "DIVIDE"){
        if(n2 != 0){
            const output=n1/n2
            res.send('The product is ' + output)
        }
        if (n2 == 0){
            res.send('Undefined')
        }
    }
    if (calc == "ADDITION"){
        const output=n1+n2
        res.send('The sum is ' + output)
    }
    
})

app.listen(8080,(res)=>{
    console.log("Server running at http://localhost:8080")
})