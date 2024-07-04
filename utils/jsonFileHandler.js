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
