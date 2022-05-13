// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//esto es un endpoint
//routes
//methods http: get,post,put,delete
app.get('/v1/explorers',(req, res)=>{
    console.log('get explorers v1 api ${new Date()}')
    const explorer1={id:1,name:"explorer1"}
    const explorer2={id:2,name:"explorer2"}
    const explorers={id:3,name:"explorer3"}
    //http code status: 200
    res.status(200).json(explorers)
})
//crear
app.post('/v1/explorers',(req, res)=>{
    console.log('post explorers v1 api ${new Date()}')
    console.log(req.body)
    res.status(201).json({message:"creado exitosamente"})
})
//actualizar
app.put('/v1/explorers/:id',(req, res)=>{
    console.log('put explorers v1 api ${new Date()}')
    console.log(req.body)
    console.log(req.params.id)
    res.status(201).json({message:"actualizado exitosamente"})
})
//eliminar
app.delete('/v1/explorers/:id',(req, res)=>{
    console.log('delete explorers v1 api ${new Date()}')
    res.status(200).json({message:"se elimino exitosamente"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})