require('dotenv').config();
const express = require('express');
// const { sequelize } = require('./models');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const notFoundMiddleware = require('./middlewares/notfound');
const errorMiddleware = require('./middlewares/error');

const checkoutRoutes = require('./routes/checkoutRoutes');

console.log(process.env.OMISE_PUBLIC_KEY);

const app = express();

// sequelize.sync({ force: true });

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

app.use('/checkout', checkoutRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));

// require('dotenv').config();
// const express = require('express');
// // const { sequelize } = require('./models');
// const cors = require('cors');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
// const notFoundMiddleware = require('./middlewares/notfound');
// const errorMiddleware = require('./middlewares/error');

// const app = express();

// // sequelize.sync({ force: true });

// app.use(morgan('dev'));
// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 15,
//     max: 1000,
//     message: { message: 'too many requests, please try again later' }
//   })
// );

// app.use(helmet());
// app.use(cors());
// app.use(express.json());

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

// const port = process.env.PORT || 8000;
// app.listen(port, () => console.log(`server running on port: ${port}`));
