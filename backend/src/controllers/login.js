const con = require('../database/connection')

module.exports = {

    async index(request, response){
        console.log("LOGIN DALE")
        return response.json("LOGIN DALE")
    }
}