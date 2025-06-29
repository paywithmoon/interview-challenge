// Update with your config settings.

const config = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'bank_interview'
    },
    migrations: {
      directory: './migrations'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'bank_interview_staging'
    },
    migrations: {
      directory: './migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'bank_interview_production'
    },
    migrations: {
      directory: './migrations'
    }
  }
};

module.exports = config; 