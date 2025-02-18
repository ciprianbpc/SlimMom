const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const dailyRateRoutes = require('./routes/daily-rate.routes');
const productRoutes = require('./routes/product.routes');

const app = express();
