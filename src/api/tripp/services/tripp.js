'use strict';

/**
 * tripp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tripp.tripp');
