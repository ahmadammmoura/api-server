'use strict';
const pool = require('./pool');
class Interface {
  constructor(table) {
    this.table = table;
  }

  read(name,id) {
    if (id) {
      const sql = `SELECT * FROM ${name} WHERE id=$1;`;
      return pool.query(sql,[id]);
    } else {
      return pool.query(`SELECT * FROM ${name};`);
    }
  }

  create(name,obj) {
    const id = Math.floor(Math.random()*10000);
    // console.log(name,'ddddddddddddddddddddddddd');
    const sql = `INSERT INTO ${name} (id,name,type) VALUES ($1,$2,$3) RETURNING *;`;
    return pool.query(sql,[id,obj.name,obj.type]);
  }

  update(name,id, obj) {
    const sql = `UPDATE ${name} SET name=$1,type=$2 WHERE id=$3 RETURNING *;`;
    return pool.query(sql,[obj.name,obj.type,id] );
  }

  delete(name,id) {
    return pool.query(`DELETE FROM ${name} WHERE id=$1 RETURNING *;`, [id]);
  }
}

module.exports = Interface;
