import { mysql } from '../../../index.js';
import { access, sql, sqlPS, values } from '../../baseConnection.js';

{
  const db = mysql.createPool(access);

  /** Overload: execute(sql, () => {}}) */
  db.execute(sql, (err, result, fields) => {
    console.log(err, result, fields);
  });

  /** Overload: execute(sql, values, () => {}}) */
  db.execute(sqlPS, values, (err, result, fields) => {
    console.log(err, result, fields);
  });

  /** Overload: execute(QueryOptions, () => {}}) I */
  db.execute({ sql }, (err, result, fields) => {
    console.log(err, result, fields);
  });

  /** Overload: execute(QueryOptions, () => {}}) II */
  db.execute({ sql: sqlPS, values }, (err, result, fields) => {
    console.log(err, result, fields);
  });

  /** Overload: execute(QueryOptions, values, () => {}}) */
  db.execute({ sql: sqlPS }, values, (err, result, fields) => {
    console.log(err, result, fields);
  });
}

/** getConnection and query */
{
  mysql.createPool(access).getConnection((err, connection) => {
    /** Overload: execute(sql, () => {}}) */
    connection.execute(sql, (err, result, fields) => {
      console.log(err, result, fields);
    });

    /** Overload: execute(sql, values, () => {}}) */
    connection.execute(sqlPS, values, (err, result, fields) => {
      console.log(err, result, fields);
    });

    /** Overload: execute(QueryOptions, () => {}}) I */
    connection.execute({ sql }, (err, result, fields) => {
      console.log(err, result, fields);
    });

    /** Overload: execute(QueryOptions, () => {}}) II */
    connection.execute({ sql: sqlPS, values }, (err, result, fields) => {
      console.log(err, result, fields);
    });

    /** Overload: execute(QueryOptions, values, () => {}}) */
    connection.execute({ sql: sqlPS }, values, (err, result, fields) => {
      console.log(err, result, fields);
    });
  });
}
