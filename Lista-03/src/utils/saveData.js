const fs = require('fs');

// Módulo utilizado para ler e escrever arquivos JSON

const saveData = {
  readJSON(filePath) {
    if(fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath);
      return JSON.parse(data);
    }
    return [];
  },

  writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  },
}

module.exports = saveData;