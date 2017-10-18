const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(5000, () => {
  logger.success('Server is running at http://localhost:5000')
})
