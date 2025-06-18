import knex from 'knex';
const config = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';
const knexConfig = config[environment];

export const db = knex(knexConfig);

export default db; 