const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 提供靜態檔案（index.html, script.js, style.css）
app.use(express.static(path.join(__dirname, '.')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 