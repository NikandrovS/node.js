module.exports = {
    app: {
        name: 'testWork',
        version: '0.0.1'
    },
    server: {
        port: 3000
    },
    product: {
        tableName: 'books'
    },
    database: {
        master: {
            host: "localhost",
            user: "root",
            password: "321321",
            port: "3306",
            database: "books",
            connectionLimit: 3
        }
    }
};