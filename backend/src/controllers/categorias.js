const con = require('../database/connection')

module.exports = {


    async create (request, response){
        const id = request.headers.authorization
        const{ categoria, tipo} = request.body
        //valida o tipo
        if(tipo != "D" && tipo != "R"){
            return response.json({"Erro": "Tipo inválido"})
        }else{
            await con.query(' insert into categorias (`categoria`, `tipo`, `usuario`) values(?, ?, ?)',
            ([categoria, tipo, id]),(err,res)=>{  
            if (err) throw err

            
            console.log({"id": res.insertId})
            return response.json({"id": res.insertId})
            })

        }
       
             

    },
    async index (request, response){
        const {categorias} = request.body 
        await con.query(`Select * from categorias `,(err,rows)=>{
            if (err) throw err
            return response.json(rows)
        })

    },

    async check (request, response){
        const{categoria} = request.body
        var {tipo} = request.body

    
        await con.query('select * from categorias where categoria = (?)', 
        ([categoria]),(err,res)=>{
            if (err) throw err
            if(res[0].tipo == tipo) {
                // categoria já existe
                return response.status(400).json({error: 'Categoria já existe'})   
            } else{
                return response.json({status: 'Categoria disponível'})
            }


        })


    }




}