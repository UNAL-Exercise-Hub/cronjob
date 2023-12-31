const express = require('express');
const cronJob = require('./CronJob/index');

const app = express();
app.use(express.json()); // Middleware para analizar el cuerpo JSON de la solicitud
app.use('/api/notificaciones', cronJob);

//configurar el puerto para escuchar peticiones
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API REST en ejecución en el puerto ${PORT}`);
});

/*
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣶⣶⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⡿⠟⠋⠉⠉⠉⠉⠹⠿⠿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⢹⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣧⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⢀⣀⠠⠤⠤⠤⠤⠤⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⢿⣿⣿⣿⣿⣿⣦⣄⡀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⠿⢻⣿⣿⣿⣿⠀⢉⣩⠤⣤⣀⢀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⢸⣿⣼⣍⡉⠉⠉⠉⠁⣿⣿⣿⣾
⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⡏⢈⢹⣿⣿⣿⣿⡟⠉⠀⣈⠙⢭⢿⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⢸⣿⠙⠿⢿⣿⣦⡤⠤⠹⣿⣿⣿
⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⡇⠀⣼⣿⡿⣿⣿⣧⠈⠮⣉⡁⠊⠈⠁⠀⠀⠀⠀⣠⣤⣶⣄⡈⢣⣾⣿⣷⣄⠀⠈⢙⣿⣆⠀⠈⠛⠿
⠀⣠⣾⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣤⣿⣿⠇⠘⣿⣿⣿⡓⠂⠀⠀⠀⠀⠀⠀⠀⢈⣫⣭⠙⡿⡇⣸⣿⣿⣿⣿⣦⣾⣿⣿⣿⣆⠀⠀⠀
⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠴⢧⡹⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⢀⡢⠥⠄⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⡤⢁⠍⠛⢿⣿⣿⠙⠒⠢⠤⣀⡀⠀⠈⠓⠀⣰⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣆⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠛⠭⠍⣀⡀⠀⢿⣿⣧⠁⠀⠀⠀⠈⠁⢲⢢⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
⣿⡿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢄⠈⠑⠦⡀⠈⠣⡉⢻⣿⣿⣀⠀⠀⠀⢄⡀⣸⢀⠆⠈⠙⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠱⢄⠀⠈⠢⣄⢈⣿⣿⡇⣀⣉⣷⣶⣤⣔⣁⠎⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟
⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠉⠘⢣⡀⠀⣠⣿⣿⡟⣠⠏⡋⢻⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣀⡀⠈⢱⣾⣿⣿⠟⢄⡟⠀⡿⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠈⠁⣰⣿⣿⡟⠀⣠⠎⠀⢠⠃⣀⠀⢻⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠹⣟
⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⣰⣿⡿⠋⠘⣶⣥⣄⣠⠋⠉⠃⠀⠈⣿⣿⣿⣿⣿⣿⣿⠹⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⠀⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣼⣿⠀⡞⢉⡟⡅⠀⡟⠢⡄⠀⠄⠀⢸⣿⣿⣿⣿⣿⣿⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⢹
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠄⣿⣿⣰⠠⠜⠛⠀⠀⠁⠀⡏⢳⠄⣀⡞⣿⣿⣿⣿⣿⣿⣧⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⣸
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠱⠰⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⡐⢣⢸⠃⢻⣿⣿⣿⣿⣿⣿⣦⡀⠈⠻⣿⣿⣿⠿⠿⢿⣿⣿
*/
