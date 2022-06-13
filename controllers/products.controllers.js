const connection2 = require("../server-alive");



module.exports.AllProducts = (req, res) => {
    var statement = 'SELECT * from product';
    console.log(connection2.prueba1())
  
    connection2.conexion().query(statement, function(err, rows, fields) {
      if (!err){
          data=rows;
        if(rows.length > 0){
          console.log("current: ", rows[0].id, rows[0].name);
          res.json({productos:rows})
        }else{
          console.log("no more new records!");
          connection2.end();
        }
      }
      else
        console.log('Error en while.');
    });  
  }

module.exports.Search = (req, res) => {
  let search = req.params.query.split("+");
  
  search = search.reduce((a, c) => a + c + " ", "").slice(0, -1);
  
  const query = "SELECT * FROM product WHERE name LIKE '%" + search + "%'";
  connection2.conexion().query(query, (err, rows) => {
      if (rows) {
      res.status(200).send(rows);
      }
  });
};

module.exports.Category = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM product WHERE category = " + id;
  connection2.conexion().query(query, (err, rows) => {
      if (rows) {
      res.status(200).send(rows);
      } else {
      res.status(404).send({ message: "Categoria no encontrada" });
      }
  });
  };