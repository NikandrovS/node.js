import query from 'mysql-query-promise';
import config from 'config';
const tableName = config.product.tableName;

const crud = {
    getAll: async () => {
        return query(`SELECT ${tableName}.id, title, autor, description, date, image FROM ${tableName}
    inner join descriptions on ${tableName}.id = descriptions.id;`);
    },
    get: async (id) => {
        let books = await query(`SELECT ${tableName}.id, title, autor, description, date, image FROM ${tableName}
    inner join descriptions on ${tableName}.id = descriptions.id where ${tableName}.id=?;`,[Number(id)]);
        return books[0];
    },
    create: async () => {
        await query(`START TRANSACTION;
            SELECT @myId:=MAX(id) FROM ${tableName}.books;
            INSERT INTO ${tableName}.books (id, title) VALUES (@myId+1, 'Пески времени');
            INSERT INTO ${tableName}.descriptions (id, autor, description, date, image)
            VALUES (@myId+1, 'Пелевин', 'Очень интересная книга', '3018-11-02', '10');
            COMMIT;`);
        return crud.getAll();
    },
    // update: async (id, product)=> {
    //     if (typeof product === 'object') {
    //         let uProduct = {};
    //         if (product.hasOwnProperty('name')) uProduct.name = String(product.name);
    //         if (product.hasOwnProperty('price')) uProduct.price = Number(product.price);
    //         if (product.hasOwnProperty('currency')) uProduct.currency = String(product.currency);
    //         let result = await query(`UPDATE ${tableName} SET ? WHERE id=?`,[uProduct, Number(id)]);
    //         return result.affectedRows;
    //     }
    // },
    delete: async (id) => {
        let result = await query(`DELETE FROM ${tableName}.autors WHERE id=?`,[Number(id)]);
        return result.affectedRows;
    }
};
export default crud;