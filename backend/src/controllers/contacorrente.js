const con = require('../database/connection')

module.exports = {


    async create (request, response){
        const id = request.headers.authorization
        const{ contacorrente, valorInicial, dataSaldo} = request.body
            await con.query(' insert into contascorrentes (`contacorrente`, `valorInicial`, `dataSaldo`, `usuario`) values(?, ?, ?, ?)',
            ([contacorrente, valorInicial, dataSaldo, id]),(err,res)=>{  
            if (err) throw err

            
            console.log({"id": res.insertId})
            return response.json({"id": res.insertId})
            })
       
             

    },
    async index (request, response){
        const id = request.headers.authorization
        const{ contacorrente, valorInicial, dataSaldo, saldoFinal} = request.body
        await con.query(`Select * from contascorrentes `,(err,rows)=>{
            if (err) throw err
            return response.json(rows)
        })

    },

    async check (request, response){
        const{ contacorrente } = request.body

    
        await con.query('select * from contascorrentes where contacorrente = (?)', 
        ([contacorrente]),(err,res)=>{
            if (err) throw err
            if(res[0]) {
                // conta corrente já existe
                return response.status(400).json({error: 'Conta corrente já existe'})   
            } else{
                return response.json({status: 'Conta corrente disponível'})
            }


        })


    }




}