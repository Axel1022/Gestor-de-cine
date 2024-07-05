const fs = require("fs");

exports.ReadAllData = (dataPath, collBack) => {
  fs.readFile(dataPath, "utf8", function (error, data) {
    if (error) {
      collBack([]);
    } else {
      collBack(JSON.parse(data));
    }
  });
};

exports.WriteData = (dataPath, data) => {
  fs.writeFile(dataPath, JSON.stringify(data), function (error) {
    console.log(error);
  });
};
exports.Buscar = (dataPath, info, callback) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return callback([]);
    }
    try {
      const jsonData = JSON.parse(data);
      const resultados = jsonData.filter(
        (item) =>
          (item.name && item.name.toLowerCase().includes(info.toLowerCase())) ||
          (item.genero &&
            item.genero.toLowerCase().includes(info.toLowerCase()))
      );
      callback(resultados);
    } catch (e) {
      callback([]);
    }
  });
};
