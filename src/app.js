require('dotenv').config();
const express = require('express');
// const { sequelize, Order, Bid } = require('./models');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const notFoundMiddleware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error');
const authenticate = require('./middlewares/authenticate');

const checkoutRoutes = require('./routes/checkoutRoutes');
const authRoute = require('./routes/auth-route');

const productRoute = require('./routes/product-route');
const categorytRoute = require('./routes/categoryRoute');
const brandRoute = require('./routes/brandRoute');

const app = express();

// const { sequelize } = require('./models');
// sequelize.sync({ force: false });

app.use(morgan('dev'));
app.use(
  rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 1000,
    message: { message: 'too many requests, please try again later' }
  })
);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/product', productRoute);
app.use('/category', categorytRoute);
app.use('/brand', brandRoute);
app.use('/size', productRoute);
// app.use('/checkout', authenticate, checkoutRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/auth', authRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));
