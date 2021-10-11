module.exports = {
    name: 'producer',
    version: '1.0.0',
    production: false,
    runnning_port: 3000,
    viewsPath: `${__dirname}/public/views/`,
    domain: 'http://localhost',
    queue: 'default'
}