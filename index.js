const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

// Process.env.PORT: 
// 'Ve al archivo de las variables de entorno 
//  y busca una variable de nombre PORT'
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`El servidor ya esta a 500km/h por la ${PORT}`)
    //Es lo mismo que hacer lo de arriba:
    //console.log('El servidor ya esta a 500km por la ' + 'PORT') 
} )