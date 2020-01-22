const ENV = process.env.NODE_ENV || 'development'

const baseConfigs = {
  client: 'pg', 
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
}

const customConfigs = {
  development: { connection: { database: 'nothing_lasts' } },
  test: { connection: { database: 'nothing_lasts_test' } }
}

module.exports = { ...baseConfigs, ...customConfigs[ENV] }