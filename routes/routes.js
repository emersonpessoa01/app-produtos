const express = require('express');

const routes = express.Router();

const User = require('../controllers/users.controller')
const Product = require('../controllers/products.controller')

routes.get('/',User.index);

// Rotas de Usuários
routes.post('/api/users',User.create);
routes.get('/api/users',User.index);
routes.get('/api/users.details/:_id',User.details);
routes.delete('/api/users/:_id',User.delete);
routes.put('/api/users',User.update);
routes.post('/api/users/login',User.login);
routes.get('/api/users/checktoken',User.checkToken);
routes.get('/api/users/destroytoken',User.destroyToken);

// Rotas de Produtos
routes.post('/api/products',Product.create);
routes.get('/api/products',Product.index);
routes.get('/api/products.details/:_id',Product.details);
routes.delete('/api/products/:_id',Product.delete);
routes.put('/api/products/:_id',Product.update);

module.exports = routes;
