const express = require('express');
const app = express();
const bookFile = 'book.json';
const { bookRouter, userRouter, authRouter } = require('./routes');
const logginMdw = require('./middleware/logging');
const { initializeDB } = require('./config/dbConfig');


// Setting
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logginMdw);

// Ruta - Home
app.get('/', (req, res, next) => {
  res.send('<h1>Ejercicio NodeJS - Cluster 1</h1>')
});

// Rutas - Libros - Usuarios - Login
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/login', authRouter);

//
const errorHandler = (err, req, res, next) => {
  if (err.message === "File Exists") {
    res.status(500);
    res.json({ message: `File ${bookFile} exists` });
  } else {
    res.status(500);
    res.json({ message: err.message });
  }
};

app.use(errorHandler);
//

// Server
app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server corriendo en http://localhost: ${PORT}`)
})
