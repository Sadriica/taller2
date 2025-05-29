const express = require('express');
const app = express();
const pokeneaRoutes = require('./routes/pokeneaRoutes');

app.use('/pokenea', pokeneaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
