// app.js
//require bir kütüphaneyi çağırmak için kullanılır.
//Kütüphanenin client fonksiyonunu kullanıyoruz ki bir yere atama yapalım.

require("dotenv").config();

const { Client } = require("pg");

const DeviceGroup = require("./src/classes/DeviceGroup");

// PostgreSQL bağlantı bilgileri
//Client sınıfının özelliklerini kullanabilmek için obje (client) oluşturduk.

const deviceGroup = new DeviceGroup();

console.log(deviceGroup.fld_Deleted);
// process de ne geldiğine bakmak için; console.log(process.env);

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

(async () => {
  try {
    // Veritabanına bağlanacak
    // await veriyi bekleyecek ama devam edecek. async
    await client.connect();

    // Query'yi çalıştırılacak
    const res = await client.query(
      'SELECT * FROM public."tbl_Device" ORDER BY "fld_Id" ASC'
    );
    const res1 = await client.query(
      'SELECT * FROM public."tbl_DeviceModel" ORDER BY "fld_Id" ASC'
    );

    // Veri konsola yazılacak
    console.log(res.rows);
    // console.log(res1.rows);

    console.log(client);
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    // Bağlantıyı kapatma işlemi
    await client.end();
  }
})();
