/**
 * Rotas / Recursos
 */

/** 
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end;
 * POST: Criar uma informação no back-end;
 * PUT: Alterar uma informação no back-end;
 * DELETE: Excluir uma informação no back-end.
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o '?' (Filtros, paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou utilizar recursos;
 */

/**
 * Bancos de Dados:
 * 
 * SQL: MySQL, Postgre, SQLite, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: tablet('users').select('*').where()
 */
const express = require('express');
const {errors} = require('celebrate');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

// app.listen(3333);

module.exports = app;

