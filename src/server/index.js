const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/api/pomodoro', (req, res) => res.send({ simple : 'Pomodoro placeholder' }));

app.listen(process.env.PORT || 8080, () => console.log(`Ready on port ${process.env.PORT || 8080}!`));
