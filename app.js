const express = require('express');
const app = express();
const bookFile = 'book.json';
const { bookRouter, userRouter, authRouter, libraryRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');
const { createAdmin } = require('./providers/userProvider');


// Setting
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta - Home
app.get('/', (req, res, next) => {
  res.send('<h1>Ejercicio NodeJS - Cluster 1</h1>')
});

// Rutas - Libros - Usuarios - Login - Librerias
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/library', libraryRouter);

// errorHandler
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
  await createAdmin();
  console.log(`Server corriendo en http://localhost: ${PORT}`)
})
