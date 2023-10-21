'use strict';

/**
 * user-managment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-managment.user-managment');
