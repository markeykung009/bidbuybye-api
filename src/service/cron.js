const cron = require('node-cron');
const { Op } = require('sequelize');
const { Bid } = require('../models');

cron.schedule('5 * * * *', async () => {
  const now = new Date();

  await Bid.update(
    { expiredDate: 'EXPIRED' },
    {
      where: {
        createdAt: {
          [Op.lt]: now
        },
        expiredDate: 'NONE',
        isSold: false
      }
    }
  );
});
