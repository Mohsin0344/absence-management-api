const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found",
        status: 404,
        error: "The requested endpoint does not exist"
    });
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server running on http://localhost:${PORT}`);
});
