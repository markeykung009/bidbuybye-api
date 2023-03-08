require('dotenv').config();
require('../src/service/cron');
const express = require('express');
// const { sequelize } = require('./models');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const notFoundMiddleware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error');
const authenticate = require('./middlewares/authenticate');

const checkoutRoutes = require('./routes/checkoutRoutes');
const authRoute = require('./routes/auth-route');
const userRoute = require('./routes/user-route');
const productRoute = require('./routes/product-route');
const categorytRoute = require('./routes/categoryRoute');
const brandRoute = require('./routes/brandRoute');
const bidRoute = require('./routes/bid-route');
const { sendLinenoti } = require('./service/linenoti-service');
const adminRoute = require('./routes/adminRoute');

const app = express();

// const { User, sequelize } = require('./models');
// sequelize.sync({ alter: true });
// User.sync({ alter: true });

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

app.use('/checkout', authenticate, checkoutRoutes);
// app.use('/checkout', checkoutRoutes);
app.use('/product', productRoute);
app.use('/category', categorytRoute);
app.use('/brand', brandRoute);
// app.use('/size', productDetailRoute);
// app.use('/checkout', authenticate, checkoutRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/size', productRoute);
app.use('/bid', bidRoute);

app.use('/linenotify', (req, res, next) => {
  sendLinenoti(2, 'แฮมๆนิสัยไม่ดี');
  next();
});

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/admin', authenticate, adminRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));
