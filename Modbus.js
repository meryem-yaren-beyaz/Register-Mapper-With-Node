require("dotenv").config(); // Ortam değişkenlerini yükler, .env dosyasındaki veritabanı bağlantı bilgilerini sağlar

const { Pool } = require("pg"); // PostgreSQL için "pg" kütüphanesinden Pool sınıfını alır

// PostgreSQL bağlantı havuzunu oluşturur
const pool = new Pool({
  user: process.env.DB_USER, // Kullanıcı adı ortam değişkeninden alınır
  host: process.env.DB_HOST, // Veritabanı sunucusunun IP adresi veya host adı ortam değişkeninden alınır
  database: process.env.DB_DATABASE, // Veritabanı adı ortam değişkeninden alınır
  password: process.env.DB_PASSWORD, // Veritabanı kullanıcı şifresi ortam değişkeninden alınır
  port: process.env.DB_PORT, // Veritabanı portu ortam değişkeninden alınır
});

// Veritabanından cihaz listesini sorgulama fonksiyonu
const getDevicesFromDatabase = async () => {
  const client = await pool.connect(); // Veritabanına bağlanmak için bir istemci alır
  console.log("Connected to the database."); // Bağlantının başarılı olduğunu belirten mesaj
  try {
    const res = await client.query(
      `SELECT 
      "fld_Id", 
      "fld_Active", 
      "fld_Deleted", 
      "fld_RecordUserId", 
      "fld_RecordDateTime", 
      "fld_UpdateUserId", 
      "fld_UpdateDateTime", 
      "fld_FirmId", 
      "fld_DeviceName", 
      "fld_Description", 
      "fld_DeviceSerialNr", 
      "fld_DeviceModelTypeId", 
      "fld_AccessPointId", 
      "fld_DeviceOrganizationId", 
      "fld_DeviceModelId", 
      "fld_DeviceCategoryId", 
      "fld_DeviceSlaveId", 
      "fld_DeviceTimezoneId", 
      "fld_Latitude", 
      "fld_Longitude", 
      "fld_DeviceDaylight", 
      "fld_LocationName" 
      FROM public."tbl_Device"` // Veritabanından cihaz bilgilerini seçer
    );
    console.log("Devices queried from the database:", res.rows); // Sorgu sonuçlarını konsola yazdırır
    return res.rows; // Sorgu sonuçlarını döndürür
  } catch (error) {
    console.error("Error querying devices from database", error); // Hata durumunda hata mesajını yazdırır
  } finally {
    client.release(); // İstemciyi serbest bırakır
    console.log("Database connection released."); // Bağlantının serbest bırakıldığını belirten mesaj
  }
};

const ModbusRTU = require("modbus-serial"); // "modbus-serial" kütüphanesini alır
const client = new ModbusRTU(); // Yeni bir Modbus istemcisi oluşturur

// Cihaza TCP üzerinden bağlanmak için fonksiyon
const connectModbus = async (ip, port) => {
  try {
    await client.connectTCP(ip, { port: port }); // Belirtilen IP ve port üzerinden TCP bağlantısı kurar
    client.setID(1); // Cihaz ID'sini 1 olarak ayarlar, bu cihazın adresi olabilir !!!! BAK BUNA
    console.log(`Connected to ${ip}:${port}`); // Bağlantının başarılı olduğunu belirten mesaj
  } catch (error) {
    console.error(`Error connecting to ${ip}:${port}`, error); // Hata durumunda hata mesajını yazdırır
  }
};

// Cihazdan veri okuma fonksiyonu
const readModbusData = async (start, length) => {
  try {
    const { username, pw } = await client.readHoldingRegisters(start, length); // Belirtilen başlangıç adresi ve uzunlukta holding register'ları okur
    return data.data; // Okunan veriyi döndürür
  } catch (error) {
    console.error("Error reading Modbus data", error); // Hata durumunda hata mesajını yazdırır
  }
};
data = {
  data: 123,
};
const monitorDevices = async () => {
  console.log("Monitoring devices..."); // Cihazları izlemeye başladığını belirten mesaj
  const devices = await getDevicesFromDatabase(); // Veritabanından cihaz listesini alır

  if (!devices || devices.length === 0) {
    console.log("No devices found."); // Eğer cihaz bulunamazsa mesaj yaz
    return;
  }

  for (let device of devices) {
    // Her bir cihaz için döngü
    const {
      fld_Id,
      fld_Active,
      fld_Deleted,
      fld_RecordUserId,
      fld_RecordDateTime,
      fld_UpdateUserId,
      fld_UpdateDateTime,
      fld_FirmId,
      fld_DeviceName,
      fld_Description,
      fld_DeviceDerialNr,
      fld_DeviceModelTypeId,
      fld_AccessPointId,
      fld_DeviceOrganizationId,
      fld_DeviceModelId,
      fld_DeviceCategoryId,
      fld_DeviceSlaveId,
      fld_DeviceTimezoneId,
      fld_Latitude,
      fld_Longitude,
      fld_DeviceDayLight,
      fld_LocationName,
    } = device;

    // Modbus bağlantısını kurar
    await connectModbus(ip, port);

    // Cihazdan veri okur
    const modbusData = await readModbusData(start, length);
    console.log(
      `Device ${device_id} ((fld_Active: ${fld_Active},(fld_Deleted: ${fld_Deleted},fld_Id: ${fld_Id}, fld_FirmId: ${fld_FirmId}, fld_RecordUserId: ${fld_RecordUserId}, fld_RecordDateTime: ${fld_RecordDateTime},
      fld_UpdateUserId: ${fld_UpdateUserId},fld_UpdateDateTime: ${fld_UpdateDateTime},fld_DeviceName: ${fld_DeviceName},
      fld_Description: ${fld_Description},fld_DeviceDerialNr: ${fld_DeviceDerialNr},fld_DeviceModelTypeId: ${fld_DeviceModelTypeId},
      fld_AccessPointId: ${fld_AccessPointId},fld_DeviceOrganizationId: ${fld_DeviceOrganizationId},fld_DeviceModelId: ${fld_DeviceModelId},
      fld_DeviceCategoryId: ${fld_DeviceCategoryId},fld_DeviceSlaveId: ${fld_DeviceSlaveId},fld_DeviceTimezoneId: ${fld_DeviceTimezoneId}, 
      fld_Latitude: ${fld_Latitude},fld_Longitude: ${fld_Longitude},fld_DeviceDayLight: ${fld_DeviceDayLight}, fld_LocationName: ${fld_LocationName},) Data:`,
      modbusData // Okunan veriyi konsola yazdırır !!! yazdırma şekline bak for ddöngüsü + console birleştir
    );
  }
};

// Cihazları sürekli izlemek için bir döngü oluştur
//TODO: temizleme için yönteme bak
setInterval(() => {
  monitorDevices(); // Her belirli aralıklarla monitorDevices fonksiyonunu çağırır
}, 10000); // Şu an 10 saniye, ama bunu 5 dakika (300000 milisaniye) olarak değiştirin

console.log("Device monitoring started..."); // İzlemeye başlandığını belirten mesaj
