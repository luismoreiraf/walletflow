const express = require('express')
const categoriaController = require('./controllers/categorias')
const contaController = require('./controllers/contacorrente')
const loginController = require('./controllers/login')
const operacaoController = require('./controllers/operacao')

const routes = express.Router();

routes.post('/login', loginController.create)
routes.post('/checklogin', loginController.check)
routes.get('/login', loginController.index)

routes.post('/categorias', categoriaController.create)
routes.get('/categorias', categoriaController.index)
routes.post('/checkcategorias', categoriaController.check)

routes.post('/contascorrentes', contaController.create)
routes.get('/contascorrentes', contaController.index)
routes.post('/checkcontascorrentes', contaController.check)

/*
routes.post('/api/post', postController.create)
routes.get('/api/post', postController.index)

routes.post('/api/post/comment', commentController.create)
routes.post('/api/post/comments', commentController.getComments)

routes.post('/api/createLogin', loginController.create)
routes.post('/api/checkLogin', loginController.check)
*/
module.exports = routes;