const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Секретный ключ для подписи JWT (в реальных проектах храни в .env)
const JWT_SECRET = 'your-very-secret-key';
const JWT_EXPIRES_IN = '1h'; // Токен живёт 1 час

// Моковые данные пользователя
const MOCK_USER = {
  id: 1,
  login: 'admin',
  password: 'admin',
  name: 'Admin User'
};

// Middleware
app.use(bodyParser.json());

// Роут авторизации
app.post('/login', (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: 'Login and password are required' });
  }

  if (login === MOCK_USER.login && password === MOCK_USER.password) {
    // Создаём JWT
    const token = jwt.sign(
      {
        id: MOCK_USER.id,
        login: MOCK_USER.login,
        name: MOCK_USER.name
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.json({
      message: 'Login successful',
      token
    });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
