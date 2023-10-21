'use strict';

/**
 * user-managment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-managment.user-managment');
