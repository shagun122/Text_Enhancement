require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const textRoutes = require('./routes/textRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/text', textRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
