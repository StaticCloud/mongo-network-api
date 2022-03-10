const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => { res.json() })

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));