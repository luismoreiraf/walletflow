
const con = require('../database/connection')

module.exports = {

 /*index(request, response){
        console.log("LOGIN DALE")
        return response.json("LOGIN DALE")
    },*/

    async create (request, response){
        const{ nome, sobrenome, email, senha } = request.body
       
        await con.query(' insert into usuarios (`nome`, `sobrenome`, `email`, `senha`) values(?, ?, ?, ?)',
            ([nome, sobrenome, email, senha]),(err,res)=>{  
            if (err) throw err
            console.log({"id": res.insertId})
            return response.json({"id": res.insertId})
        })     

    },

    async check (request,response){
        const{email, senha} = request.body

        await con.query('select * from usuarios where email = (?)', 
        ([email]),(err,res)=>{
            if (err) throw err

            if(!res[0]) {
                // user_email does not exist in db
                return response.status(400).json({error: 'Falha no login'})   
            }

        
            if (senha == res[0].senha){
                // loggin OK
                console.log(`USER: ${res[0].id} logged in at ${new Date()}`)
                return response.json({"id": res[0].id})

            }else{
                // senha wrong
                return response.status(400).json({error:'Falha no login'})
            }

        })

    },
    async index (request, response){
        const {usuarios} = request.body 
        await con.query(`Select * from usuarios `,(err,rows)=>{
            if (err) throw err
            return response.json(rows)
        })

    }


}