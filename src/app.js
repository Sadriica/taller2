const express = require('express');
const router = express.Router();
const path = require('path');
const os = require('os');
const pokeneas = require('./models/pokeneasData');
const pokeneaRoutes = require('./routes/pokeneasRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname); 
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/', (req, res) => {
  const pokenea = pokeneas[0];
  res.render('pokeneas', {
    name: pokenea.getName(),
    image: pokenea.getImage(),
    phrase: pokenea.getPhrase(),
    containerId: os.hostname()
  });
});

app.use('/pokeneas', pokeneaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
