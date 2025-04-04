const express = require('express');
const tokenRoutes = require('./routes/token');
const { port } = require('./config');

const app = express();

app.use(express.json());

app.use('/api', tokenRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the ERC20 API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
